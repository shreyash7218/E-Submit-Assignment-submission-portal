import React, { useState } from 'react';

// Mock queries data
const initialQueries = [
  {
    id: 1,
    student: 'John Doe',
    subject: 'C++',
    question: 'How do virtual functions work in C++?',
    timestamp: '2024-03-15 10:30 AM',
    status: 'answered',
    answer: 'Virtual functions are member functions that can be overridden in derived classes. They ensure that the correct function is called for an object regardless of the type of reference used for function call.'
  },
  {
    id: 2,
    student: 'Jane Smith',
    subject: 'Java',
    question: 'What is the difference between ArrayList and LinkedList?',
    timestamp: '2024-03-15 11:45 AM',
    status: 'pending'
  }
];

function QuerySystem({ userRole }) {
  const [queries, setQueries] = useState(initialQueries);
  const [newQuery, setNewQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('C++');
  const [answer, setAnswer] = useState('');

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    if (!newQuery.trim()) return;

    const query = {
      id: queries.length + 1,
      student: 'Current Student',
      subject: selectedSubject,
      question: newQuery,
      timestamp: new Date().toLocaleString(),
      status: 'pending'
    };

    setQueries([...queries, query]);
    setNewQuery('');
  };

  const handleSubmitAnswer = (queryId) => {
    if (!answer.trim()) return;

    setQueries(queries.map(q => 
      q.id === queryId 
        ? { ...q, status: 'answered', answer } 
        : q
    ));
    setAnswer('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Query System</h2>
      
      {userRole === 'student' && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Ask a Question</h3>
          <form onSubmit={handleSubmitQuery} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="input-field"
              >
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="DSA">Data Structures & Algorithms</option>
                <option value="DBMS">Database Management</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Question
              </label>
              <textarea
                value={newQuery}
                onChange={(e) => setNewQuery(e.target.value)}
                className="input-field"
                rows={3}
                placeholder="Type your question here..."
              />
            </div>
            
            <button type="submit" className="btn-primary">
              Submit Question
            </button>
          </form>
        </div>
      )}
      
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">
          {userRole === 'teacher' ? 'Student Queries' : 'Your Queries'}
        </h3>
        <div className="space-y-4">
          {queries.map((query) => (
            <div key={query.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">{query.student}</p>
                  <p className="text-sm text-gray-500">{query.subject} • {query.timestamp}</p>
                </div>
                <span className={`px-2 py-1 text-sm rounded-full ${
                  query.status === 'pending' 
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {query.status === 'pending' ? 'Pending' : 'Answered'}
                </span>
              </div>
              
              <p className="text-gray-700 mb-2">{query.question}</p>
              
              {query.status === 'answered' && (
                <div className="bg-gray-50 p-3 rounded-lg mt-2">
                  <p className="text-sm font-medium text-gray-700">Answer:</p>
                  <p className="text-gray-600">{query.answer}</p>
                </div>
              )}
              
              {userRole === 'teacher' && query.status === 'pending' && (
                <div className="mt-3">
                  <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="input-field mb-2"
                    rows={2}
                    placeholder="Type your answer..."
                  />
                  <button 
                    onClick={() => handleSubmitAnswer(query.id)}
                    className="btn-primary"
                  >
                    Submit Answer
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuerySystem;