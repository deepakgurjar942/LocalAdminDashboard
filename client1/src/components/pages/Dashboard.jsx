import React, { useState } from "react";
import FormList from '../FormList'; 
import { Link } from 'react-router-dom';
export default function Dashboard() { 
   const [users, setUsers] = useState([]);
  
  
  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers); 
  };
  
  const handleUpdateUser = (id, updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...updatedUser } : user
    );
    setUsers(updatedUsers);
  };
  



  return (
  <div className="p-4">
    {/* Header Section: Title + Button on the same row */}
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <Link to="/user-management">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Add New Users
        </button>
      </Link>
    </div>

    {/* User List Component */}
    <FormList
      users={users}
      onUpdate={handleUpdateUser}
      onDelete={handleDeleteUser}
    />
  </div>
)
}

