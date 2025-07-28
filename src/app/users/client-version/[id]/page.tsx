'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { User } from '@/types';
import Image from 'next/image';
import { ParamValue } from 'next/dist/server/request/params';
import { useRouter } from 'next/navigation';

export default function UserPageClient() {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [message, setMessage] = useState('');
  const router = useRouter();

  async function fetchUser(id: ParamValue) {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
      const obj = await res.json();
      if (!res.ok) {
        throw new Error('Failed to fetch user' + res.status);
      }
      setUser(obj);
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      }
    }
  }

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  return (
    <div>
      {message ? (
        <div>{message}</div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5 size-full py-20 px-10 bg-[#f5f4fa] dark:bg-background">
          <h1 className="text-4xl font-bold mb-5">UserPage</h1>
          <div>
            <div
              className="
               w-[270px] h-[428px] rounded-[10px] overflow-hidden
               bg-secondary-100 shadow-[0px_1px_3px_rgba(0,0,0,0.12),0px_1px_1px_rgba(0,0,0,0.14),0px_2px_1px_rgba(0,0,0,0.2)]
               dark:bg-neutral-800 dark:shadow-[0px_1px_3px_rgba(255,255,255,0.12),0px_1px_1px_rgba(255,255,255,0.14),0px_2px_1px_rgba(255,255,255,0.2)]
             "
            >
              <div className="h-[60%] flex justify-center items-center">
                <Image
                  src={user ? user.avatar : ''}
                  alt={'Avatar ' + user?.name}
                  width={200}
                  height={200}
                  unoptimized
                  className="size-3/4 object-cover rounded-[50%]"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{user?.name || 'No name'}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">{user?.email}</p>
                <p className="font-bold text-sm text-gray-500 dark:text-gray-300 mb-5">{user?.role}</p>
                <button
                  onClick={() => router.back()}
                  className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 uppercase rounded-2xl"
                >
                  back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
