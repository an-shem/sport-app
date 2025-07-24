import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="w-full flex justify-center items-center flex-col p-6 ">
      <h2 className="font-bold text-3xl">Page not found!</h2>
      <Link className="underline mt-8 hover:text-amber-300" href={'/'}>
        Back to home
      </Link>
    </div>
  );
}
