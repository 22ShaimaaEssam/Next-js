'use client';

import { useState } from "react";
import PriceFilter from "@/components/PriceFilter";
import Link from "next/link";

export default function ProductList({ initialProducts }: { initialProducts: any[] }) {
  const [filtered, setFiltered] = useState(initialProducts);

  const handleFilterChange = (filter: string) => {
    let newList = [...initialProducts];
    if (filter === 'small') {
      newList = newList.filter(p => p.price < 50);
    } else if (filter === 'medium') {
      newList = newList.filter(p => p.price >= 50 && p.price <= 100);
    } else if (filter === 'high') {
      newList = newList.filter(p => p.price > 100);
    }
    setFiltered(newList);
  };

  return (
    <>
      <PriceFilter onFilterChange={handleFilterChange} />
      <div className="row">
        {filtered.map((product: any) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={product.thumbnail} 
                className="card-img-top p-3" 
                alt={product.title} 
                style={{height: "200px", objectFit: "contain"}}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <Link 
                  href={`/product/${product.id}`} 
                  className="btn btn-success mt-auto"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}