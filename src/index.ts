import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstname: string,
  lastname: string,
  email: string
) {
  const response = await prisma.user.create({
    data: {
      username,
      password,
      firstname,
      lastname,
      email,
    },
  });
  console.log(response);
}

insertUser("6", "7", "7", "7", "7");
