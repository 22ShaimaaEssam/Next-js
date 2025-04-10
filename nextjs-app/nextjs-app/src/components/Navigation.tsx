'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <Link className={`btn btn-link text-primary ${pathname === '/' ? 'fw-bold' : ''}`} href="/">Home</Link>
      <Link className={`btn btn-link text-primary ${pathname.includes('products') ? 'fw-bold' : ''}`} href="/products">Products</Link>
      <Link className={`btn btn-link text-primary ${pathname.includes('category') ? 'fw-bold' : ''}`} href="/category">Category</Link>
    </nav>
  );
}