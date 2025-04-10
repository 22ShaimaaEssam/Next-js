'use client';

import React from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="text-danger">there is an error occuerd!</h1>
      <p>{error.message}</p>
      <button className="btn btn-success mt-3" onClick={() => reset()}>
        try again
      </button>
    </div>
  );
}
