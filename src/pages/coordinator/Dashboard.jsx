import React from 'react';

// Mock data for users
const users = [
  { id: 1, name: 'Raj Khanna', role: 'student', prn: 'PRN001', subject: 'All' },
  { id: 2, name: 'Amit Modi', role: 'teacher', prn: 'TCH001', subject: 'C++' },
  { id: 3, name: 'Nirmala sharma', role: 'teacher', prn: 'TCH002', subject: 'Java' }
];
function CoordinatorDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Coordinator Dashboard</h1>
      
      <div className="flex justify-end space-x-4">
        <button className="btn-primary">Add User</button>
        <button className="btn-primary">Download Reports</button>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">User Management</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PRN/ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.prn}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CoordinatorDashboard;