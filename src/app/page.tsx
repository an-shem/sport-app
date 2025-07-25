import Image from 'next/image';

export default function Home() {
  return (
    <div className="p-8">
      <p className="bg-background text-foreground">Hello Next</p>
      <p className="bg-amber-400 dark:bg-cyan-700">Example</p>
    </div>
  );
}
