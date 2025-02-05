import React, { useState } from 'react';

function AssignmentSubmission() {
  const [file, setFile] = useState(null);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file submission to backend
    console.log('File submitted:', file);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Submit Assignment</h1>
      
      <div className="card max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Assignment Details</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Web Technologies Assignment 1</h3>
            <p className="text-gray-600">Due: March 20, 2024</p>
          </div>
          
          <div className="prose">
            <p>Create a responsive website using HTML and CSS that implements the following:</p>
            <ul>
              <li>Navigation menu</li>
              <li>Hero section</li>
              <li>Features grid</li>
              <li>Contact form</li>
            </ul>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Your Solution
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-primary file:text-white
                  hover:file:bg-secondary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Comments (Optional)
              </label>
              <textarea
                className="input-field mt-1"
                rows={4}
                placeholder="Any additional comments about your submission..."
              />
            </div>
            
            <button type="submit" className="btn-primary">
              Submit Assignment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AssignmentSubmission;