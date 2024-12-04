import React from 'react';
import '../style.css';
import Sidebar from './Sidebar';

function Students() {
  const students = [
    { id: 1, name: "John Doe", department: "Computer Science" },
    { id: 2, name: "Jane Smith", department: "Mechanical Engineering" },
    { id: 3, name: "Sam Wilson", department: "Electrical Engineering" },
    // Add more students as needed
  ];

  return (
<div>
    <Sidebar/>
<div className='students-container' style={{marginLeft:"500px"}}>
      <h3>Students</h3>
      <table className='students-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
  );
}

export default Students;
