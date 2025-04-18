import React from "react";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-success" role="status" style={{ width: '5rem', height: '5rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}