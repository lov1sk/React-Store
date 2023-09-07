import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

type TokenDecodedType = {
  name: string;
  role?: string;
  sub: string;
  iat: number;
  exp: number;
};
export async function UserRoutes(app: FastifyInstance) {
  // Hook para verificar se o token foi informado nos headers para garantir acesso as rotas
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify();
  });

  // Rota que atraves de um token informado, retorna as informações do usuario cadastrado
  app.post("/user/recover", async (request, reply) => {
    const { token } = request.body as { token: string };
    console.log(token);

    const { sub } = (await app.jwt.decode(token)) as TokenDecodedType;
    try {
      let user = await prisma.user.findUniqueOrThrow({ where: { id: sub } });
      user.password = "";
      return reply.status(200).send({ user });
    } catch (error) {
      return reply.status(500).send("Not Found or internal error");
    }
  });

  //Listagem de informações de um usuario
  app.get("/user/:id/profile", async (request, reply) => {
    const { id } = request.params as { id: string };
    console.log(id);

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        avatar_url: true,
        phone: true,
        name: true,
        email: true,
        password: false,
        age: true,
        gender: true,
        address: true,
      },
    });

    return reply.status(200).send({ user });
  });

  //Listagem de produtos que um usuario comprou
  app.get("/user/:id/requests", async (request, reply) => {
    const { id } = request.params as { id: string };
    const userSales = await prisma.sale.findMany({
      where: {
        userId: id,
      },
      select: {
        createdAt: true,
        userId: true,
        product: {
          select: {
            id: true,
            name: true,
            category: true,
            description: true,
            cover_url: true,
            price: true,
          },
        },
      },
    });
    return reply.status(200).send({ userSales });

    // pegar o usuario
    //incluir o campo de sales
    // selecionar tudo
  });
}
