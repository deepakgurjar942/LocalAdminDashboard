

// import React, { useEffect, useState } from "react";

// export default function FormList({ onDelete, onUpdate }) {
//   const [users, setUsers] = useState([]);
//   const [viewUser, setViewUser] = useState(null);
//   const [editUser, setEditUser] = useState(null);
//   const [updatedData, setUpdatedData] = useState({});

//   // Fetch users from API when component mounts
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/users");
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error("Failed to fetch users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedData({ ...updatedData, [name]: value });
//   };

//   const handleUpdateSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(editUser.id, updatedData);
//     setEditUser(null);
//   };

//   return (
//     <div className="px-4 mt-6">
//       <h2 className="mb-4 text-xl font-semibold text-center">Submitted Users</h2>
//       {users.length === 0 ? (
//         <p className="text-center text-gray-500">No users submitted yet.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-sm border border-gray-300 table-auto">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">Mobile</th>
//                 <th className="px-4 py-2">Address</th>
//                 <th className="px-4 py-2">Purpose</th>
//                 <th className="px-4 py-2">Concern</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={user.id || index} className="border-t">
//                   <td className="px-4 py-2">{user.name} {user.lastName}</td>
//                   <td className="px-4 py-2">{user.mobile}</td>
//                   <td className="px-4 py-2">{user.address}</td>
//                   <td className="px-4 py-2">{user.purpose}</td>
//                   <td className="px-4 py-2">{user.concern}</td>
//                   <td className="px-4 py-2 space-x-2">
//                     <button
//                       onClick={() => setViewUser(user)}
//                       className="px-3 py-1 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
//                     >
//                       View
//                     </button>
//                     <button
//                       onClick={() => {
//                         setEditUser(user);
//                         setUpdatedData(user);
//                       }}
//                       className="px-3 py-1 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 "
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => onDelete(index)}
//                       className="px-3 py-1 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* View and Edit Modals stay unchanged below */}
//       {/* ... */}
//     </div>
//   );
// }













import React, { useState } from "react";

export default function FormList({ users = [], onDelete, onUpdate }) {
  const [viewUser, setViewUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    onUpdate(editUser.id, updatedData);
    setEditUser(null);
  };

  return (
    <div className="px-4 mt-6">
      <h2 className="mb-4 text-xl font-semibold text-center">Submitted Users</h2>
      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users submitted yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-300 table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Mobile</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Purpose</th>
                <th className="px-4 py-2">Concern</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id || index} className="border-t">
                  <td className="px-4 py-2">{user.name} {user.lastName}</td>
                  <td className="px-4 py-2">{user.mobile}</td>
                  <td className="px-4 py-2">{user.address}</td>
                  <td className="px-4 py-2">{user.purpose}</td>
                  <td className="px-4 py-2">{user.concern}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => setViewUser(user)}
                      className="px-3 py-1 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      View
                    </button>
                    <button
                      onClick={() => {
                        setEditUser(user);
                        setUpdatedData(user);
                      }}
                      className="px-3 py-1 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 "
                    >
                      Edit
                    </button>
                    <button
                onClick={() => onDelete(index)}
               className="px-3 py-1 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                 >
                      Delete
                        </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* View Modal */}
{viewUser && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <h3 className="mb-4 text-lg font-bold text-center">User Details</h3>

      <table className="w-full text-sm border border-gray-300 table-fixed">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/3 px-4 py-2 text-left border border-gray-300">Field</th>
            <th className="px-4 py-2 text-left border border-gray-300">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(viewUser).map(([key, val]) => (
            <tr key={key} className="border border-gray-300">
              <td className="px-4 py-2 font-medium capitalize border border-gray-300">{key}</td>
              <td className="px-4 py-2 border border-gray-300">
                {key === "aadharFile" && val ? (
                  typeof val === "string" || val instanceof File ? (
                    val.name?.match(/\.(jpg|jpeg|png)$/i) ? (
                      <img
                        src={typeof val === "string" ? val : URL.createObjectURL(val)}
                        alt="Aadhar"
                        className="mt-1 border rounded max-h-48"
                      />
                    ) : (
                      <a
                        href={typeof val === "string" ? val : URL.createObjectURL(val)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View File
                      </a>
                    )
                  ) : (
                    <span className="text-gray-500">No file available</span>
                  )
                ) : (
                  <span>{val}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right">
        <button
          onClick={() => setViewUser(null)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


      {/* Edit Modal */}
{editUser && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
    <form
      onSubmit={handleUpdateSubmit}
      className="bg-white p-6 rounded shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto"
    >
      <h3 className="mb-4 text-lg font-bold">Edit User Details</h3>

      {/* Editable Fields */}
      {[
        { name: "name", label: "First Name" },
        { name: "lastName", label: "Last Name" },
        { name: "mobile", label: "Mobile Number" },
        { name: "aadhar", label: "Aadhar Number" },
        { name: "address", label: "Address" },
        { name: "purpose", label: "Purpose" },
        { name: "fileNo", label: "File Number" },
        { name: "fileLocation", label: "File Location" },
        { name: "rack", label: "Rack" },
        { name: "position", label: "Position" },
        { name: "concern", label: "Concern" },
      ].map((field) => (
        <div key={field.name} className="mb-3">
          <label className="block mb-1 text-sm font-medium">{field.label}</label>
          <input
            type="text"
            name={field.name}
            value={updatedData[field.name] || ""}
            onChange={handleEditChange}
            className="w-full px-2 py-1 text-sm border rounded"
          />
        </div>
      ))}

      {/* Aadhar File Preview */}
      {editUser.aadharFile && (
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Aadhar File</label>
          {editUser.aadharFile.name?.match(/\.(jpg|jpeg|png)$/i) ? (
            <img
              src={URL.createObjectURL(editUser.aadharFile)}
              alt="Aadhar"
              className="border rounded max-h-48"
            />
          ) : (
            <a
              href={URL.createObjectURL(editUser.aadharFile)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View File
            </a>
          )}
        </div>
      )}

      {/* Modal Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          type="button"
          onClick={() => setEditUser(null)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Update
        </button>
      </div>
    </form>
  </div>
)}

    </div>
  );
}
