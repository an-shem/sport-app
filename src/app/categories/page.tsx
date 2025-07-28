import { Category } from '@/types';
import React from 'react';
import Image from 'next/image';

export default async function Categories() {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories', {
    next: { tags: ['categories'] },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  const categories = await res.json();

  return (
    <div>
      <ul className="w-full flex flex-wrap gap-20 justify-center py-20 px-10 bg-[#f5f4fa] dark:bg-background">
        {categories.map((category: Category) => (
          <li
            key={category.id}
            className="
            flex flex-col items-center p-5
    w-[270px] h-[428px] rounded-[10px] overflow-hidden
    bg-secondary-100 shadow-[0px_1px_3px_rgba(0,0,0,0.12),0px_1px_1px_rgba(0,0,0,0.14),0px_2px_1px_rgba(0,0,0,0.2)]
    dark:bg-neutral-800 dark:shadow-[0px_1px_3px_rgba(255,255,255,0.12),0px_1px_1px_rgba(255,255,255,0.14),0px_2px_1px_rgba(255,255,255,0.2)]
  "
          >
            <Image src={category.image} alt={category.name} width={200} height={200} unoptimized />
            <p className="mt-10">{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
