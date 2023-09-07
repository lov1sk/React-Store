import {FastifyInstance} from 'fastify'
import { prisma } from '../lib/prisma'

export async function SalesRoutes(app:FastifyInstance) {
  // Hook para verificar se o token foi informado nos headers para garantir acesso as rotas
 app.addHook('preHandler', async (request) => {
    await request.jwtVerify()
  }) 

  // Realização de uma compra pelo usuario
  app.post('/:id/buy', async (request,reply)=>{
    const {id} = request.params as {id:string}
    const {userId} = request.body as {userId:string}

    const saleProduct = await prisma.sale.create({
      data:{
        userId,
        productId:id
      }
    })
    return reply.status(201).send({sale: saleProduct})
    
  })
}