import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

type RequestProductSended = {
  name: string;
  category: string;
  description: string;
  price: number;
  cover_url: string;
  item_set: string;
};

export async function ProductsRoutes(app: FastifyInstance) {
  // Hook para verificar se o token foi informado nos headers para garantir acesso as rotas
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify();
  });

  //Listagem de produtos disponiveis
  app.get("/products", async (request, reply) => {
    const products = await prisma.product.findMany({
      include: {
        sales: true,
      },
    });
    const productsAvailable = products.filter(
      (product) => product.sales.length == 0
    );

    return reply
      .status(200)
      .send({ message: "Hello dear developer!", result: productsAvailable });
  });

  //Listagem de um unico produto
  app.get("/product/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const product = await prisma.product.findUnique({
      where: { id },
    });
    reply.status(200).send({ result: product });
  });

  // Criação de um novo produto
  app.post("/product", async (request, reply) => {
    const { name, category, description, price, cover_url, item_set } =
      request.body as RequestProductSended;
    console.log({ name, category, description, price, cover_url, item_set });

    try {
      const productCreated = await prisma.product.create({
        data: {
          name,
          category,
          description,
          item_set,
          cover_url,
          price,
        },
      });
      console.log(productCreated);
      return reply.status(200).send({ message: "OK!", result: productCreated });
    } catch (err) {
      return reply.status(400).send({ message: "Error!", result: err.message });
    }
  });

  app.put("/product/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const { name, category, description, price, cover_url, item_set } =
      request.body as RequestProductSended;

    let product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product)
      return reply.status(400).send({ message: "Product not found" });

    product = await prisma.product.update({
      where: { id },
      data: {
        name,
        category,
        description,
        price,
        cover_url,
        item_set,
      },
    });
    return reply
      .status(200)
      .send({ message: "updated successfully", result: product });
  });

  app.delete("/product/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    let product = await prisma.product.findUniqueOrThrow({
      where: { id },
    });

    if (!product)
      return reply.status(400).send({ message: "Product not found" });

    await prisma.product.delete({
      where: { id },
    });

    return reply.status(200).send({ message: "Product deleted successfully" });
  });
}
