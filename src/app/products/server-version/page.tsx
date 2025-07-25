import ProductCard from '@/components/ProductCard/ProductCard';
import { Product } from '@/types';

export default async function ProductsServerVersion() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products', {
    next: { tags: ['products'] },
  });
  if (!res.ok) {
    throw new Error('Products failed to fetch');
  }
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <ul className="grid grid-cols-5 gap-5 py-20 px-10">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
