import { useState } from "react";
import UserForm from "./UserForm";
import FormList from "./FormList";


export default function UserManagement() {

  const [users, setUsers] = useState([]);

  const handleFormSubmit = (formData) => {
    const newUser = { ...formData, id: Date.now() };
    setUsers([...users, newUser]);
    // navigate('/');
};

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
    <div>
      <UserForm onSubmit={handleFormSubmit} />
      <FormList
      users={users}
      onUpdate={handleUpdateUser}
      onDelete={handleDeleteUser} 
        
      />
    </div>
  );
}
