// import { getAllUsers, 
//   // getUserById, createUser, updateUser, deleteUser
//  } from '../services/userService';
// import { NextApiRequest, NextApiResponse } from 'next';
// export const handleGetUsers = async (req:NextApiRequest, res:NextApiResponse) => {
//   const users = await getAllUsers();
//   return res.status(200).json(users);
// };

// export const handleGetUserById = async (req:NextApiRequest, res:NextApiResponse) => {
//   const { id } = req.query;
//   const user = await getUserById(Number(id));
//   return user ? res.status(200).json(user) : res.status(404).json({ error: "User not found" });
// };

// export const handleCreateUser = async (req:NextApiRequest, res:NextApiResponse) => {
//   const { name, email } = req.body;
//   const newUser = await createUser({ name, email });
//   return res.status(201).json(newUser);
// };

// export const handleUpdateUser = async (req:NextApiRequest, res:NextApiResponse) => {
//   const { id } = req.query;
//   const data = req.body;
//   const updatedUser = await updateUser(Number(id), data);
//   return res.status(200).json(updatedUser);
// };

// export const handleDeleteUser = async (req:NextApiRequest, res:NextApiResponse) => {
//   const { id } = req.query;
//   await deleteUser(Number(id));
//   return res.status(204).end();
// };


// Fetch all users
// export const handleGetUsers = async (req: NextApiRequest) => {
//   const users = await getAllUsers();
//   return users;
// };

// // Create a new user
// export const handleCreateUser = async (data: { name: string, email: string }) => {
//   const newUser = await createUser(data);
//   return newUser;
// };

import { NextRequest } from 'next/server';
import { getAllUsers, createUser } from '../services/userService';

// Fetch all users with NextRequest
export const handleGetUsers = async (req: NextRequest) => {
  const users = await getAllUsers();
  return users;
};

// Create a new user with NextRequest
export const handleCreateUser = async (req: NextRequest) => {
  const body = await req.json(); // Parse body from NextRequest
  const { name, email } = body;
  const newUser = await createUser({ name, email });
  return newUser;
};
