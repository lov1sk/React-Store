import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

type RequestUserSended = {
  avatar_url: string;
  phone: string;
  name: string;
  gender: string;
  email: string;
  password: string;
  address: string;
  age: number;
  role?: string;
};

export async function AuthRoutes(app: FastifyInstance) {
  app.post("/register", async (request, reply) => {
    const {
      avatar_url,
      phone,
      name,
      gender,
      email,
      password,
      address,
      age,
      role,
    } = request.body as RequestUserSended;

    if (role) {
      const hash = await bcrypt.hash(password, 10);
      await prisma.user.create({
        data: {
          avatar_url,
          phone,
          name,
          email,
          age,
          gender,
          password: hash,
          address,
          role,
        },
      });
      return reply.status(201).send();
    }

    // encriptografar a senha e salvar esse has no banco de dados
    const hash = await bcrypt.hash(password, 10);

    try {
      const user = await prisma.user.create({
        data: {
          avatar_url,
          phone,
          name,
          email,
          age,
          gender,
          password: hash,
          address,
        },
      });

      const token = app.jwt.sign(
        {
          // Colocar aqui apenas informações publicas, no caso as que serão mostradas na interface
          avatar_url: user.avatar_url,
          name: user.name,
          role: user.role,
        },
        {
          /* Colocar em sub informações unicas como o ID e tempo de expiração, todas as informações 
          Todas as informações permitentes a nossa aplicação que são sensiveis, colocar aqui
          */
          sub: user.id,
          expiresIn: "1 days",
        }
      );

      return reply.status(200).send({ user, token });
    } catch (error) {
      console.log(error);
    }
  });
  app.post("/login", async (request, reply) => {
    const { email, password } = request.body as RequestUserSended;

    //primeira coisa que faço, ver se tem o email no banco de dados
    const userExists = await prisma.user.findUnique({
      where: { email },
    });
    if (!userExists)
      return reply.status(422).send({ message: "email invalid" });

    if (userExists.role == "admin" && userExists.password == password)
      return reply.status(200).send({
        user: userExists,
        token: app.jwt.sign(
          {
            // Colocar aqui apenas informações publicas, no caso as que serão mostradas na interface
            name: userExists.name,
            role: userExists.role,
          },
          {
            /* Colocar em sub informações unicas como o ID e tempo de expiração, todas as informações 
            Todas as informações permitentes a nossa aplicação que são sensiveis, colocar aqui
            */
            sub: userExists.id,
            expiresIn: "1 days",
          }
        ),
      });

    if (!(await bcrypt.compare(password, userExists.password)))
      return reply.status(422).send({ message: "password incorrect" });

    return reply.status(200).send({
      user: userExists,
      token: app.jwt.sign(
        {
          // Colocar aqui apenas informações publicas, no caso as que serão mostradas na interface
          name: userExists.name,
          role: userExists.role,
        },
        {
          /* Colocar em sub informações unicas como o ID e tempo de expiração, todas as informações 
          Todas as informações permitentes a nossa aplicação que são sensiveis, colocar aqui
          */
          sub: userExists.id,
          expiresIn: "1 days",
        }
      ),
    });
  });
}
