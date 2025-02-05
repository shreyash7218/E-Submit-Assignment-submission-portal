import React from 'react';
import { Link } from 'react-router-dom';
import QuerySystem from '../../components/QuerySystem';
import Chatbot from '../../components/Chatbot';

// Mock data for subjects and assignments
const subjects = [
  { 
    id: 1, 
    name: 'C++', 
    type: 'code',
    assignments: [
      { id: 1, title: 'Pointers and References', completed: true, score: 95 },
      { id: 2, title: 'Object-Oriented Programming', completed: false }
    ]
  },
  { 
    id: 2, 
    name: 'Java', 
    type: 'code',
    assignments: [
      { id: 1, title: 'Java Collections', completed: true, score: 88 },
      { id: 2, title: 'Exception Handling', completed: false }
    ]
  },
  { 
    id: 3, 
    name: 'Data Structures & Algorithms', 
    type: 'code',
    assignments: [
      { id: 1, title: 'Binary Search Trees', completed: true, score: 92 },
      { id: 2, title: 'Graph Algorithms', completed: false }
    ]
  },
  { 
    id: 4, 
    name: 'DBMS', 
    type: 'sql',
    assignments: [
      { id: 1, title: 'SQL Joins and Subqueries', completed: true, score: 85 },
      { id: 2, title: 'Database Normalization', completed: false }
    ]
  },
  { 
    id: 5, 
    name: 'Web Technologies', 
    type: 'file',
    assignments: [
      { id: 1, title: 'Responsive Web Design', completed: true, score: 90 },
      { id: 2, title: 'React Components', completed: false }
    ]
  },
  { 
    id: 6, 
    name: 'DevOps', 
    type: 'file',
    assignments: [
      { id: 1, title: 'CI/CD Pipeline', completed: true, score: 87 },
      { id: 2, title: 'Docker Containers', completed: false }
    ]
  },
  { 
    id: 7, 
    name: 'Software Testing', 
    type: 'file',
    assignments: [
      { id: 1, title: 'Unit Testing', completed: true, score: 94 },
      { id: 2, title: 'Integration Testing', completed: false }
    ]
  },
  { 
    id: 8, 
    name: 'Git', 
    type: 'file',
    assignments: [
      { id: 1, title: 'Git Basics', completed: true, score: 96 },
      { id: 2, title: 'Advanced Git Operations', completed: false }
    ]
  }
];

function StudentDashboard() {
  // Calculate overall progress
  const totalAssignments = subjects.reduce((acc, subject) => acc + subject.assignments.length, 0);
  const completedAssignments = subjects.reduce((acc, subject) => 
    acc + subject.assignments.filter(a => a.completed).length, 0);
  const overallProgress = Math.round((completedAssignments / totalAssignments) * 100);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
        <div className="text-right">
          <p className="text-sm text-gray-600">Overall Progress</p>
          <div className="flex items-center mt-1">
            <div className="w-48 h-2 bg-gray-200 rounded-full mr-2">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <span className="text-sm font-medium">{overallProgress}%</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => {
          const subjectProgress = Math.round(
            (subject.assignments.filter(a => a.completed).length / subject.assignments.length) * 100
          );
          
          return (
            <div key={subject.id} className="card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
              
              <div className="space-y-3 mb-4">
                {subject.assignments.map(assignment => (
                  <div key={assignment.id} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{assignment.title}</span>
                    {assignment.completed ? (
                      <span className="text-sm text-green-600">{assignment.score}%</span>
                    ) : (
                      <span className="text-sm text-yellow-600">Pending</span>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Progress</span>
                  <span className="font-medium">{subjectProgress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${subjectProgress}%` }}
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500 capitalize">
                  {subject.type === 'code' ? 'Programming' : 
                   subject.type === 'sql' ? 'Database' : 'Theory'}
                </span>
                <Link 
                  to={subject.type === 'code' ? '/code-editor' : 
                      subject.type === 'sql' ? '/sql-editor' : 
                      '/submit-assignment'} 
                  className="btn-primary"
                >
                  View Assignments
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuerySystem userRole="student" />
        <Chatbot />
      </div>
    </div>
  );
}

export default StudentDashboard;