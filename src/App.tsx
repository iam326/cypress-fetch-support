import React, { FC, useEffect, useState } from 'react';
import './App.css';

type Employee = {
  id: number;
  name: string;
  age: number;
};

const App: FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const listStyle = {
    marginBottom: '4px',
  };

  useEffect(() => {
    fetch('http://localhost:3001/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div className="App">
      <h3>Employees</h3>
      <ul id="employees">
        {employees.map((employee) => (
          <li key={employee.id} style={listStyle}>
            {employee.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
