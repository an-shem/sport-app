'use client';

import { Product } from '@/types';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}
// chunk, bundle, code splitting
export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  function handleDelete(id: number) {
    fetchDelete(id);
  }
  async function fetchDelete(id: number) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      router.refresh();
    }
  }

  return (
    <li className="flex flex-col items-center gap-2.5 p-5 border border-solid border-amber-500 rounded-2xl font-semibold text-cyan-700 hover:shadow-2xl hover:scale-98 bg-amber-50 hover:bg-amber-100">
      <h3 className=" flex-1">{product.title}</h3>

      <Image src={product.images[0]} alt={'Product ' + product.title} width={200} height={200} unoptimized />
      <p className="font-[Monoton]">{product.price}$</p>
      <button
        type="button"
        onClick={() => {
          handleDelete(product.id);
        }}
      >
        Delete
      </button>
      <Link href={`/products/server-version/${product.id}`}>To product</Link>
    </li>
  );
}
