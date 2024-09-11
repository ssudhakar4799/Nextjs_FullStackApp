import prisma from '../db/prisma';

// Admin-specific logic
export const getAllUsersAsAdmin = async () => {
  return await prisma.user.findMany({
    orderBy: { createdAt: 'desc' }
  });
};

export const deleteUserAsAdmin = async (id: number) => {
  return await prisma.user.delete({
    where: { id },
  });
};
