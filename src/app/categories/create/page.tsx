import { createCategory } from '@/app/actions/createCategory';

export default function CreateCategory() {
  return (
    <div className="mx-auto w-1/2 max-w-[460px]">
      <form action={createCategory} className="flex flex-col gap-5 items-center justify-center p-5 text-center">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className=' className="mt-1 block w-full px-4 py-3 border border-gray-300  rounded-lg focus:ring-0 focus:ring-blue-500 focus:border-transparent focus:outline-none focus:shadow-none'
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          className=' className="mt-1 block w-full px-4 py-3 border border-gray-300  rounded-lg focus:ring-0 focus:ring-blue-500 focus:border-transparent focus:outline-none focus:shadow-none'
        />
        <button
          type="submit"
          className="flex-1 bg-accent text-white px-6 py-2 rounded shadow hover:bg-secondary transition"
        >
          Save
        </button>
      </form>
    </div>
  );
}
