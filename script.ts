import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async (): Promise<void> => {
  await prisma.user.deleteMany()
  const user = await prisma.user.create({
    data: {
      name: 'James',
      email: 'james@gmail.com',
      age: 24,
      roleId: 1
    },
    select: {
      name: true,
      userPreference: true
    }
  })
  console.log(user)
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
