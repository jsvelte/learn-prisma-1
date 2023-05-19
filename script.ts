import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async (): Promise<void> => {
  const users = await prisma.user.findMany()
  console.log(users)
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
