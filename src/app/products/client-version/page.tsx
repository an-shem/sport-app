'use client';

import ProductCard from '@/components/ProductCard/ProductCard';
import { Product } from '@/types';
import { useEffect, useState } from 'react';

const ProductsClientVersion = () => {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      if (!res.ok) {
        throw new Error('Products failed to fetch');
      }
      const data = await res.json();
      setProducts(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
      }
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-5 gap-5 py-20 px-10">
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsClientVersion;
