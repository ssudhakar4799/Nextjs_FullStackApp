import {
   handleCreateUser,
    handleGetUsers } from '@/app/backend/controllers/userController';
import { NextRequest, NextResponse } from 'next/server';

// Named export for GET request (fetch all users)
export async function GET(req: NextRequest) {
  try {
    const users = await handleGetUsers(req);
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ message: 'Failed to fetch users' }, { status: 500 });
  }
}

// Named export for POST request (create a new user)
export async function POST(req: NextRequest) {
  try {
    // const body = await req.json();
    const newUser = await handleCreateUser(req);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ message: 'Failed to create user' }, { status: 500 });
  }
}
