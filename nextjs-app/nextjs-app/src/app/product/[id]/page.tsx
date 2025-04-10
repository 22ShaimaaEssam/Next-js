export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products.map((product: any) => ({ id: product.id.toString() }));
}

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} className="img-fluid" alt={product.title} />
      <p>{product.description}</p>
      <p className="text-success fw-bold">${product.price}</p>
    </div>
  );
}