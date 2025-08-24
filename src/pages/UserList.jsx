import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const dummyUsers = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john@example.com",
    role: "Admin",
    created_at: "2025-08-20",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    username: "janesmith",
    email: "jane@example.com",
    role: "User",
    created_at: "2025-08-21",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    username: "bobjohnson",
    email: "bob@example.com",
    role: "User",
    created_at: "2025-08-22",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Williams",
    username: "alicew",
    email: "alice@example.com",
    role: "User",
    created_at: "2025-08-23",
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Brown",
    username: "charlieb",
    email: "charlie@example.com",
    role: "User",
    created_at: "2025-08-24",
  },
  {
    id: 6,
    firstName: "Eve",
    lastName: "Davis",
    username: "eved",
    email: "eve@example.com",
    role: "Admin",
    created_at: "2025-08-25",
  },
];

const UserList = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  const handleEdit = (user) => {
    console.log("Edit user:", user);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  // pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="bg-white shadow rounded-lg border border-slate-200 p-6 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-slate-800">User List</h2>
      </div>

      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-3 text-left text-slate-700">ID</th>
            <th className="px-6 py-3 text-left text-slate-700">First Name</th>
            <th className="px-6 py-3 text-left text-slate-700">Last Name</th>
            <th className="px-6 py-3 text-left text-slate-700">Username</th>
            <th className="px-6 py-3 text-left text-slate-700">Email</th>
            <th className="px-6 py-3 text-left text-slate-700">Role</th>
            <th className="px-6 py-3 text-left text-slate-700">Created At</th>
            <th className="px-6 py-3 text-left text-slate-700">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200">
          {currentUsers.map((user) => (
            <tr key={user.id} className="hover:bg-slate-50">
              <td className="px-6 py-3 text-slate-700">{user.id}</td>
              <td className="px-6 py-3 text-slate-700">{user.firstName}</td>
              <td className="px-6 py-3 text-slate-700">{user.lastName}</td>
              <td className="px-6 py-3 text-slate-700">{user.username}</td>
              <td className="px-6 py-3 text-slate-700">{user.email}</td>
              <td className="px-6 py-3 text-slate-700">{user.role}</td>
              <td className="px-6 py-3 text-slate-700">{user.created_at}</td>
              <td className="px-6 py-3 text-slate-700 flex items-center gap-3">
                <button
                  onClick={() => handleEdit(user)}
                  className="text-sky-600 hover:text-sky-800 flex items-center gap-1 cursor-pointer"
                >
                  <Edit className="w-4 h-4" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:text-red-800 flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-slate-600">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 border rounded text-slate-600 hover:bg-slate-100 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-slate-800 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 border rounded text-slate-600 hover:bg-slate-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
