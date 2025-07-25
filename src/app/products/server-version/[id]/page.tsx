import React from 'react';

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  return <div>ID - {id}</div>;
}
