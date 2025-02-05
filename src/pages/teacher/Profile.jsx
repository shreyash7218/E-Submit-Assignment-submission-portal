import React from 'react';

// Mock teacher data
const teacherData = {
  name: 'Dr. Sarah Wilson',
  id: 'TCH001',
  email: 'sarah.wilson@example.com',
  department: 'Computer Science',
  subjects: ['C++', 'Data Structures'],
  experience: '8 years',
  students: [
    { name: 'John Doe', subject: 'C++', grade: 'A', status: 'Active' },
    { name: 'Jane Smith', subject: 'C++', grade: 'B+', status: 'Active' },
    { name: 'Mike Johnson', subject: 'Data Structures', grade: 'A-', status: 'Active' }
  ]
};

function TeacherProfile() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Teacher Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card md:col-span-1">
          <div className="text-center">
            <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-gray-600">
                {teacherData.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h2 className="text-xl font-semibold">{teacherData.name}</h2>
            <p className="text-gray-600">{teacherData.id}</p>
          </div>
          
          <div className="mt-6 border-t pt-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="font-medium">{teacherData.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Department</label>
                <p className="font-medium">{teacherData.department}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Experience</label>
                <p className="font-medium">{teacherData.experience}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Subjects</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {teacherData.subjects.map(subject => (
                    <span key={subject} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Student Performance Overview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {teacherData.students.map((student, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.grade}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;