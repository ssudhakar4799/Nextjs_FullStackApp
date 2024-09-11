import { handleAdminDeleteUser } from '@/app/backend/controllers/adminController';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    return await handleAdminDeleteUser(req, res);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
