import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodos(userId: number) {
  const response = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      title: true,
      description: true,
      user: true,
    },
  });
  console.log(response);
}

getTodos(5);
