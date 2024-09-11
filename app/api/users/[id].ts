
import { handleGetUserById, handleUpdateUser, handleDeleteUser} from "@/app/backend/controllers/userController";
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    return await handleGetUserById(req, res);
  } else if (req.method === 'PUT') {
    return await handleUpdateUser(req, res);
  } else if (req.method === 'DELETE') {
    return await handleDeleteUser(req, res);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
