import React from 'react';
import UsersList from './UsersList';

export default function App() {
  const users = [
    { id: 1, name: 'Tom', age: 20 },
    { id: 2, name: 'Bob', age: 100 },
    { id: 3, name: 'Rob', age: 32 },
    { id: 4, name: 'Rim', age: 45 },
    { id: 5, name: 'Skin', age: 27 },
    { id: 6, name: 'Bobby', age: 26 },
    { id: 7, name: 'Jack', age: 19 },
    { id: 8, name: 'Bom', age: 21 },
    { id: 9, name: 'DOM', age: 22 },
    { id: 10, name: 'Toretto', age: 60 },
  ];

  return (
    <>
      <UsersList users={users} />
    </>
  );
}
