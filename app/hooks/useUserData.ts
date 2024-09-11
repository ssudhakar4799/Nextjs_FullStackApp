import { useState, useEffect } from 'react';
import { fetcher } from '../utils/fetcher';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const useUserData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await fetcher('/api/users');
        setUsers(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err); // Set the error if it's of type 'Error'
        } else {
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
