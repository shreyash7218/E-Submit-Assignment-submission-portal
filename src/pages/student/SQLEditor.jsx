import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/theme-monokai';

function SQLEditor() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">SQL Editor</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Problem Description</h2>
          <div className="prose">
            <p>Write a SQL query to find the names of employees who have a salary greater than their department's average salary.</p>
            <h3>Schema</h3>
            <pre className="bg-gray-100 p-2 rounded">
              Employees(id, name, salary, department_id)
              Departments(id, name)
            </pre>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-end">
            <button className="btn-primary">Run Query</button>
          </div>
          
          <AceEditor
            mode="mysql"
            theme="monokai"
            name="sql-editor"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
            style={{ width: '100%', height: '400px' }}
          />
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Results</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Salary
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">1</td>
                    <td className="px-6 py-4 whitespace-nowrap">Rajesh Kanna</td>
                    <td className="px-6 py-4 whitespace-nowrap">$75,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SQLEditor;