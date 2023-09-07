import "@fastify/jwt"

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: {
      id: string,
      name: string,
      email: string,
      avatar_url: string
    } // user type is return type of `request.user` object
  }
}

  