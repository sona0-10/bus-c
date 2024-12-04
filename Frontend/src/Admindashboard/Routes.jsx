import React from 'react';
import './styles.css';

function Routes() {
  const routes = [
    { id: 1, name: "Route 1", stops: 10 },
    { id: 2, name: "Route 2", stops: 15 },
    { id: 3, name: "Route 3", stops: 8 },
    // Add more routes as needed
  ];

  return (
    <div className='routes-container'>
      <h3>Routes</h3>
      <ul className='routes-list'>
        {routes.map((route) => (
          <li key={route.id} className='routes-item'>
            <h4>{route.name}</h4>
            <p>Stops: {route.stops}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Routes;
