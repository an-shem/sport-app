import { notFound } from 'next/navigation';

export default async function About() {
  // const BASE_URL = process.env.BASE_URL;
  // const res = await fetch(BASE_URL + '/api/hello');
  // if (!res.ok) {
  //   notFound();
  // }
  // const { message } = await res.json();
  return (
    <div className="px-28 py-20">
      <h2 className="text-3xl font-bold mb-2.5">О проекте</h2>
      <p>Платформа для онлайн-обучения различным видам спорта</p>
      {/* <p>{message}</p> */}
    </div>
  );
}
