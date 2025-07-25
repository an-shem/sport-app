'use client';

import Link from 'next/link';
import { title } from 'process';

export default function LinkBtn({ url, title }: { url: number; title: string }) {
  return (
    <Link
      href={`/users/client-version/${url}`}
      className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 uppercase rounded-2xl"
    >
      {title}
    </Link>
  );
}
