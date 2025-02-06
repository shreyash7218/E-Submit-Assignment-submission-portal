import React, { useState } from 'react';
import QuerySystem from '../../components/QuerySystem';

// Mock data for pending assessments and student performance
const initialAssessments = [
  { 
    id: 1,
    student: 'John Doe', 
    prn: 'PRN001',
    subject: 'C++', 
    assignment: 'Pointers Exercise', 
    submittedAt: '2024-03-15',
    code: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int* ptr = &x;
    cout << "Value: " << *ptr << endl;
    return 0;
}`,
    status: 'pending'
  },
  { 
    id: 2, 
    student: 'Jane Smith', 
    prn: 'PRN002',
    subject: 'Java', 
    assignment: 'OOP Concepts', 
    submittedAt: '2024-03-14',
    code: `public class Student {
    private String name;
    public Student(String name) {
        this.name = name;
    }
    public void display() {
        System.out.println("Name: " + name);
    }
}`,
    status: 'pending'
  },
  { 
    id: 3, 
    student: 'Mike Johnson', 
    prn: 'PRN003',
    subject: 'DSA', 
    assignment: 'Binary Trees', 
    submittedAt: '2024-03-13',
    code: `class Node {
    int data;
    Node left, right;
    
    Node(int item) {
        data = item;
        left = right = null;
    }
}`,
    status: 'pending'
  }
];

function TeacherDashboard() {
  const [assessments, setAssessments] = useState(initialAssessments);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [grade, setGrade] = useState('');

  const handleReview = (assignment) => {
    setSelectedAssignment(assignment);
    setFeedback('');
    setGrade('');
  };

  const handleSubmitReview = () => {
    if (!feedback || !grade) {
      alert('Please provide both feedback and grade');
      return;
    }

    setAssessments(prev => prev.map(a => 
      a.id === selectedAssignment.id 
        ? { ...a, status: 'reviewed', feedback, grade } 
        : a
    ));
    setSelectedAssignment(null);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6">
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
                    PRN
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
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {assessments.map((assessment) => (
                  <tr key={assessment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{assessment.student}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{assessment.prn}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{assessment.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{assessment.assignment}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{assessment.submittedAt}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-sm rounded-full ${
                        assessment.status === 'pending' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {assessment.status === 'pending' ? 'Pending' : 'Reviewed'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {assessment.status === 'pending' && (
                        <button 
                          onClick={() => handleReview(assessment)}
                          className="text-primary hover:text-primary/80"
                        >
                          Review
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedAssignment && (
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Review Assignment</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Student Code</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{selectedAssignment.code}</code>
                </pre>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Grade
                </label>
                <input
                  type="text"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="input-field"
                  placeholder="Enter grade (e.g., A, B+, C)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Feedback
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={4}
                  className="input-field"
                  placeholder="Provide detailed feedback..."
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedAssignment(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitReview}
                  className="btn-primary"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="card">
          <QuerySystem userRole="teacher" />
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
