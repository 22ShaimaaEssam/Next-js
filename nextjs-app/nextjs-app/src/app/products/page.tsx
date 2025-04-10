import React, { Suspense } from "react";
import ProductList from "./ProductList";
// import PriceFilter from "@/components/PriceFilter";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", { 
    cache: 'no-store' 
  });
  const data = await res.json();
  return data.products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container py-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList initialProducts={products} />
      </Suspense>
    </div>
  );
}