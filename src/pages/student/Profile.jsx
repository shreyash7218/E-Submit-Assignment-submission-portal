import React from 'react';

// Mock student data
const studentData = {
  name: 'John Doe',
  prn: 'PRN001',
  email: 'john.doe@example.com',
  course: 'Computer Science',
  year: '3rd Year',
  assignments: [
    { id: 1, subject: 'C++', title: 'Pointers Exercise', grade: 'A', feedback: 'Excellent work!' },
    { id: 2, subject: 'Java', title: 'OOP Concepts', grade: 'B+', feedback: 'Good understanding of concepts.' },
    { id: 3, subject: 'DSA', title: 'Binary Trees', grade: 'A-', feedback: 'Well-implemented solutions.' }
  ]
};

function Profile() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Student Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card md:col-span-1">
          <div className="text-center">
            <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-gray-600">
                {studentData.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h2 className="text-xl font-semibold">{studentData.name}</h2>
            <p className="text-gray-600">{studentData.prn}</p>
          </div>
          
          <div className="mt-6 border-t pt-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="font-medium">{studentData.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Course</label>
                <p className="font-medium">{studentData.course}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Year</label>
                <p className="font-medium">{studentData.year}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Recent Assessments</h2>
          <div className="space-y-4">
            {studentData.assignments.map((assignment) => (
              <div key={assignment.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{assignment.subject}</h3>
                    <p className="text-sm text-gray-600">{assignment.title}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-sm font-medium
                    ${assignment.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                      assignment.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'}`}>
                    {assignment.grade}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{assignment.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;