import { User } from '@/types';
import React from 'react';
import Image from 'next/image';
import LinkBtn from '../LinkBtn/LinkBtn';

export default function UserCard({ user, url }: { user: User; url: string }) {
  return (
    <div
      className="
    w-[270px] h-[428px] rounded-[10px] overflow-hidden
    bg-secondary-100 shadow-[0px_1px_3px_rgba(0,0,0,0.12),0px_1px_1px_rgba(0,0,0,0.14),0px_2px_1px_rgba(0,0,0,0.2)]
    dark:bg-neutral-800 dark:shadow-[0px_1px_3px_rgba(255,255,255,0.12),0px_1px_1px_rgba(255,255,255,0.14),0px_2px_1px_rgba(255,255,255,0.2)]
  "
    >
      <div className="h-[60%] flex justify-center items-center">
        <Image
          src={user.avatar}
          alt={'Avatar ' + user.name}
          width={200}
          height={200}
          unoptimized
          className="size-3/4 object-cover rounded-[50%]"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{user.name || 'No name'}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">{user.email}</p>
        <p className="font-bold text-sm text-gray-500 dark:text-gray-300 mb-5">{user.role}</p>
        <LinkBtn url={url} title={'To user'} />
      </div>
    </div>
  );
}
