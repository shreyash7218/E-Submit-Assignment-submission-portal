import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';

function CodeEditor() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Code Editor</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Problem Description</h2>
          <div className="prose">
            <p>Write a program to find the factorial of a number.</p>
            <h3>Input Format</h3>
            <p>A single integer n (0 ≤ n ≤ 20)</p>
            <h3>Output Format</h3>
            <p>Print a single line containing the factorial of n.</p>
            <h3>Example</h3>
            <pre className="bg-gray-100 p-2 rounded">
              Input: 5
              Output: 120
            </pre>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <select className="input-field w-48">
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
            <button className="btn-primary">Run Code</button>
          </div>
          
          <AceEditor
            mode="c_cpp"
            theme="monokai"
            name="code-editor"
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
            <h3 className="text-lg font-semibold mb-2">Output</h3>
            <pre className="bg-gray-100 p-4 rounded">
              // Program output will appear here
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;