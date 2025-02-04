import React from 'react';

// Mock data for pending assessments
const pendingAssessments = [
  { id: 1, student: 'Raj Khanna', subject: 'C++', assignment: 'Pointers Exercise', submittedAt: '2024-03-15' },
  { id: 2, student: 'Amit Modi', subject: 'Java', assignment: 'OOP Concepts', submittedAt: '2024-03-14' },
  { id: 3, student: 'Nirmala sharma', subject: 'DSA', assignment: 'Binary Trees', submittedAt: '2024-03-13' }
];

function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Pending Assessments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assignment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingAssessments.map((assessment) => (
                <tr key={assessment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{assessment.student}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{assessment.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{assessment.assignment}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{assessment.submittedAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="btn-primary">Review</button>
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

export default TeacherDashboard;