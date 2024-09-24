import React from 'react';
import DataTable from './Datatable';

// Define the data structure as a TypeScript type
interface User {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const data: User[] = [
    { id: 1, name: 'Snehalata Das', email: 'Snehalata@example.com' },
    { id: 2, name: 'Sisira Sahoo', email: 'Sisira@example.com' },
    { id: 3, name: 'Kishor sekhar Das', email: 'Kishor@example.com' }
  ];

  return (
    <div className="App">
      <h1>Detail Information</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;
