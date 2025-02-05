import React, { useState } from 'react';

// Mock data for users and departments
const initialUsers = [
  { id: 1, name: 'John Doe', role: 'student', prn: 'PRN001', subject: 'All', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', role: 'teacher', prn: 'TCH001', subject: 'C++', email: 'jane@example.com' },
  { id: 3, name: 'Mike Johnson', role: 'teacher', prn: 'TCH002', subject: 'Java', email: 'mike@example.com' },
  { id: 4, name: 'Sarah Wilson', role: 'student', prn: 'PRN002', subject: 'All', email: 'sarah@example.com' }
];

const subjects = [
  'C++', 'Java', 'Data Structures & Algorithms', 'DBMS', 
  'Web Technologies', 'DevOps', 'Software Testing', 'Git'
];

function CoordinatorDashboard() {
  const [users, setUsers] = useState(initialUsers);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    role: 'student',
    prn: '',
    subject: 'All',
    email: ''
  });

  const handleAddUser = () => {
    if (!formData.name || !formData.prn || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingUser) {
      setUsers(users.map(user => 
        user.id === editingUser.id ? { ...formData, id: user.id } : user
      ));
    } else {
      setUsers([...users, { ...formData, id: users.length + 1 }]);
    }

    setShowAddModal(false);
    setEditingUser(null);
    setFormData({
      name: '',
      role: 'student',
      prn: '',
      subject: 'All',
      email: ''
    });
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData(user);
    setShowAddModal(true);
  };

  const handleRemove = (userId) => {
    if (window.confirm('Are you sure you want to remove this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const handleDownloadReport = () => {
    // Mock function to demonstrate report download
    alert('Downloading user report...');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Coordinator Dashboard</h1>
        <div className="space-x-4">
          <button 
            onClick={() => setShowAddModal(true)} 
            className="btn-primary"
          >
            Add User
          </button>
          <button 
            onClick={handleDownloadReport}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Download Report
          </button>
        </div>
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
                  Email
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
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button 
                      onClick={() => handleEdit(user)}
                      className="text-primary hover:text-primary/80"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleRemove(user.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {editingUser ? 'Edit User' : 'Add New User'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder="Enter name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="input-field"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PRN/ID
                </label>
                <input
                  type="text"
                  value={formData.prn}
                  onChange={(e) => setFormData({ ...formData, prn: e.target.value })}
                  className="input-field"
                  placeholder="Enter PRN/ID"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input-field"
                  disabled={formData.role === 'student'}
                >
                  <option value="All">All</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  placeholder="Enter email"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingUser(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddUser}
                className="btn-primary"
              >
                {editingUser ? 'Update' : 'Add'} User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoordinatorDashboard;