import { fastify } from "fastify";
import jwt from "@fastify/jwt";
import cors from "@fastify/cors";
import { ProductsRoutes } from "./routes/products";
import { AuthRoutes } from "./routes/auth";
import { UserRoutes } from "./routes/user";
import { SalesRoutes } from "./routes/sales";

// Instancia fastify
const app = fastify();

// Middlewares
app.register(cors, {
  origin: true,
});
app.register(jwt, {
  secret: "Ecommerce-React",
});
app.register(ProductsRoutes);
app.register(AuthRoutes);
app.register(UserRoutes);
app.register(SalesRoutes);

// Inicialização do servidor
app
  .listen({ port: 3434 })
  .then(() => console.log(`🚀Server running at port 3434🚀`));
