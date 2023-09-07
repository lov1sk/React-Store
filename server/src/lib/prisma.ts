import { PrismaClient } from '@prisma/client'

// Exportando um client fixo do prisma
export const prisma = new PrismaClient({
  log: ['query'],
})
