// 'use client';
import Link from 'next/link';

export default function LinkBtn({ url, title }: { url: string; title: string }) {
  return (
    <Link href={`${url}`} className="px-5 py-2 bg-blue-500 text-white hover:bg-blue-600 uppercase rounded-2xl">
      {title}
    </Link>
  );
}
