import Image from 'next/image';
import { notFound } from 'next/navigation';
// import router from 'next/router';

export default async function UserPageServer({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);

  if (!res.ok) {
    if (res.status === 404 || res.status === 400) {
      notFound();
    }
    throw new Error('Failed toload user info');
  }
  const user = await res.json();

  return (
    <section className="bg-secondary py-20 px-32 flex justify-center">
      <div className="bg-primary w-64 p-8 flex flex-col items-center gap-6 rounded-2xl border border-border">
        <h2>{user.name}</h2>
        <Image src={user.avatar} alt={'avatar'} width={300} height={300} className="rounded-2xl" unoptimized />
        <p className="bg-secondary w-26 sm:w-28 md:w-50 lg:w-60">{user.email}</p>
      </div>
    </section>
  );
}
