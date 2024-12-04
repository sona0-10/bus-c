import React from 'react';
import './styles.css';

function Fee() {
  const fees = [
    { id: 1, student: "John Doe", amount: "$500", status: "Paid" },
    { id: 2, student: "Jane Smith", amount: "$450", status: "Pending" },
    { id: 3, student: "Sam Wilson", amount: "$600", status: "Paid" },
    // Add more fee details as needed
  ];

  return (
    <div className='fee-container'>
      <h3>Fee Details</h3>
      <table className='fee-table'>
        <thead>
          <tr>
            <th>Student</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee) => (
            <tr key={fee.id}>
              <td>{fee.student}</td>
              <td>{fee.amount}</td>
              <td>{fee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fee;
