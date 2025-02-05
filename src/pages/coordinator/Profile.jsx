import React from 'react';

// Mock coordinator data
const coordinatorData = {
  name: 'Prof. Michael Chen',
  id: 'COORD001',
  email: 'michael.chen@example.com',
  department: 'Academic Administration',
  role: 'Course Coordinator',
  experience: '12 years',
  responsibilities: [
    'Course curriculum management',
    'Faculty coordination',
    'Student assessment oversight',
    'Academic policy implementation'
  ],
  stats: {
    totalStudents: 450,
    totalTeachers: 15,
    activeCourses: 8,
    completionRate: 92
  }
};

function CoordinatorProfile() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Coordinator Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card md:col-span-1">
          <div className="text-center">
            <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-gray-600">
                {coordinatorData.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h2 className="text-xl font-semibold">{coordinatorData.name}</h2>
            <p className="text-gray-600">{coordinatorData.id}</p>
          </div>
          
          <div className="mt-6 border-t pt-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="font-medium">{coordinatorData.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Department</label>
                <p className="font-medium">{coordinatorData.department}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Role</label>
                <p className="font-medium">{coordinatorData.role}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Experience</label>
                <p className="font-medium">{coordinatorData.experience}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Program Overview</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/10 rounded-lg p-4">
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-primary">{coordinatorData.stats.totalStudents}</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-4">
              <p className="text-sm text-gray-600">Total Teachers</p>
              <p className="text-2xl font-bold text-primary">{coordinatorData.stats.totalTeachers}</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-4">
              <p className="text-sm text-gray-600">Active Courses</p>
              <p className="text-2xl font-bold text-primary">{coordinatorData.stats.activeCourses}</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-4">
              <p className="text-sm text-gray-600">Completion Rate</p>
              <p className="text-2xl font-bold text-primary">{coordinatorData.stats.completionRate}%</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
            <ul className="space-y-2">
              {coordinatorData.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoordinatorProfile;