import { Product } from '@/types';
import React from 'react';

const ProductsServerVersion = async () => {
  let products: Product[] | undefined;
  try {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    products = data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <ul className="grid grid-cols-5 gap-5 py-20 px-10">
        {products?.map((p: Product) => (
          <li
            key={'product ' + p.id}
            className="flex flex-col items-center gap-2.5 p-5 border border-solid border-amber-500 rounded-2xl font-semibold text-cyan-700 hover:shadow-2xl hover:scale-98 bg-amber-50 hover:bg-amber-100"
          >
            <h3 className=" flex-1">{p.title}</h3>
            <img src={p.images[0]} alt="product" className="w-full" />
            <p className="font-[Monoton]">{p.price}$</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsServerVersion;
