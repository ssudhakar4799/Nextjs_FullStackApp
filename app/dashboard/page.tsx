"use client";
import React, { useEffect, useState } from 'react';
import { fetcher } from '../utils/fetcher';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch users data
    const fetchUsers = async () => {
      try {
        const data = await fetcher('/api/users'); // API call for GET
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle input changes for the new user form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission to create a new user
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await fetcher('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser), // Send new user data
      });

      // Update the users state with the newly created user
      setUsers((prev) => [...prev, data]);
      setNewUser({ name: '', email: '' }); // Reset form fields
      setError(null); // Clear any previous error
    } catch (error) {
      setError('Failed to create user');
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h1>User Dashboard</h1>

      {/* New User Form */}
      <form onSubmit={handleSubmit}>
        <h2>Create New User</h2>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <button type="submit">Create User</button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display Users */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
