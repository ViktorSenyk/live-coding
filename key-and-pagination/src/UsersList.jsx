import React, { useState } from 'react';
import Pagination from './Pagination';
import User from './User';

export default function UsersList({ users }) {
  const [currentPage, setCurrentPage] = useState(1);

  const goNext = () => setCurrentPage(currentPage + 1);
  const goPrev = () => setCurrentPage(currentPage - 1);

  const itemsPerPage = 3;

  const usersForDisplay = users.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
        goNext={goNext}
        goPrev={goPrev}
      />
      <ul className="users">
        {usersForDisplay.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
}
