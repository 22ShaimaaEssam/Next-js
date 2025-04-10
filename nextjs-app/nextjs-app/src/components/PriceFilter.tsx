'use client';

import React from 'react';

interface PriceFilterProps {
  onFilterChange: (filter: string) => void;
}

export default function PriceFilter({ onFilterChange }: PriceFilterProps) {
  return (
    <div className="mb-4 d-flex gap-2 justify-content-center">
      <button 
        className="btn btn-outline-primary"
        onClick={() => onFilterChange("")}
      >
        All
      </button>
      <button 
        className="btn btn-outline-primary"
        onClick={() => onFilterChange("small")}
      >
        Small
      </button>
      <button 
        className="btn btn-outline-primary"
        onClick={() => onFilterChange("medium")}
      >
        Medium
      </button>
      <button 
        className="btn btn-outline-primary"
        onClick={() => onFilterChange("high")}
      >
        High
      </button>
    </div>
  );
}
