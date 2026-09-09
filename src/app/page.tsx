import prisma from "../lib/db/prisma";

export default async function Home() {
  const products = await prisma.product.findMany();
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
