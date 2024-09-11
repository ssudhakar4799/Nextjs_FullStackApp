// import { getAllUsersAsAdmin, deleteUserAsAdmin } from '../services/adminService';
import { NextApiRequest, NextApiResponse } from 'next';
import { deleteUserAsAdmin, getAllUsersAsAdmin } from "../services/adminService";

export const handleAdminGetUsers = async (req:NextApiRequest, res:NextApiResponse) => {
  const users = await getAllUsersAsAdmin();
  return res.status(200).json(users);
};

export const handleAdminDeleteUser = async (req:NextApiRequest, res:NextApiResponse) => {
  const { id } = req.query;
  await deleteUserAsAdmin(Number(id));
  return res.status(204).end();
};
