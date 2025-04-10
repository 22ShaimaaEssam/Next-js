import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-4">404</h1>
      <p className="lead text-danger">Page Not Found</p>
      <Link href="/" className="btn btn-outline-success mt-3">Go To Home</Link>
    </div>
  );
}
