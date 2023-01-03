import React from 'react';

fetch('http://localhost:3000/trips')
  .then(response => response.json())
  .then(json => console.log(json));

export default function TripList() {
  return (
    <div>
      <h2>Trip List</h2>
    </div>
  );
}
