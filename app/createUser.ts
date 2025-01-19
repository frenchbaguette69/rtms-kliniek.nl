const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const newUser = {
      email: 'test@example.com',
      name: 'John Doe',
      password: 'supersecurepassword',
    };

    const existingUser = await prisma.user.findUnique({
      where: { email: newUser.email },
    });

    if (existingUser) {
      console.error('Gebruiker met dit e-mailadres bestaat al.');
      return;
    }

    const createdUser = await prisma.user.create({
      data: {
        email: newUser.email,
        name: newUser.name,
        password: newUser.password,
      },
    });

    console.log('Nieuwe gebruiker aangemaakt:', createdUser);
  } catch (error) {
    console.error('Er is een fout opgetreden:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
