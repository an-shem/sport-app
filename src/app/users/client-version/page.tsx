'use client';
import UserCard from '@/components/UserCard/UserCard';
import { User } from '@/types';
import { useEffect, useState } from 'react';

export default function UsersClientVersion() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    const res = await fetch('https://api.escuelajs.co/api/v1/users', {
      headers: { 'Api-Key': 'asdasda.asdasd.asdasdasd9123adsmkkasd' },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    const arr = await res.json();
    console.log(arr);
    setUsers(arr);
  }
  return (
    <ul className="w-full flex flex-wrap gap-20 justify-center py-20 px-10 bg-[#f5f4fa] dark:bg-background">
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} url={`/users/client-version/${user.id}`} />
        </li>
      ))}
    </ul>
  );
}
