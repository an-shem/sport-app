import { createProduct } from '@/app/actions/cresteProduct';
import { Category } from '@/types';

export default async function CreateProduct() {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories');
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  const categories = await res.json();
  return (
    <div>
      <form action={createProduct} className="flex flex-col gap-5 w-1/2 max-w-[400px] mx-auto py-20 px-10">
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          className=' className="mt-1 block w-full px-4 py-3 border border-gray-300  rounded-lg focus:ring-1 focus:ring-accent focus:border-transparent focus:outline-none focus:shadow-none'
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          required
          className=' className="mt-1 block w-full px-4 py-3 border border-gray-300  rounded-lg focus:ring-1 focus:ring-accent focus:border-transparent focus:outline-none focus:shadow-none'
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          required
          className=' className="mt-1 block w-full px-4 py-3 border border-gray-300  rounded-lg focus:ring-1 focus:ring-accent focus:border-transparent focus:outline-none focus:shadow-none'
        />
        <select
          name="categoryId"
          required
          className=' className="mt-1 block w-full px-4 py-3 border border-gray-300  rounded-lg focus:ring-1 focus:ring-accent focus:border-transparent focus:outline-none focus:shadow-none'
        >
          {categories.map((category: Category) => (
            <option value={category.id} className="dark:text-accent" key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="image"
          placeholder="image"
          required
          className=' className="mt-1 block w-full px-4 py-3 border border-gray-300  rounded-lg focus:ring-1 focus:ring-accent focus:border-transparent focus:outline-none focus:shadow-none'
        />
        <button
          type="submit"
          className="flex-1 mx-auto bg-accent text-white w-1/2 px-6 py-2 rounded shadow hover:bg-secondary transition"
        >
          Add product
        </button>
      </form>
    </div>
  );
}
