import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import StudentDashboard from './pages/student/Dashboard';
import TeacherDashboard from './pages/teacher/Dashboard';
import CoordinatorDashboard from './pages/coordinator/Dashboard';
import CodeEditor from './pages/student/CodeEditor';
import SQLEditor from './pages/student/SQLEditor';
import AssignmentSubmission from './pages/student/AssignmentSubmission';
import Profile from './pages/student/Profile';
import TeacherProfile from './pages/teacher/Profile';
import CoordinatorProfile from './pages/coordinator/Profile';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student/*" element={<StudentDashboard />} />
          <Route path="/teacher/*" element={<TeacherDashboard />} />
          <Route path="/coordinator/*" element={<CoordinatorDashboard />} />
          <Route path="/code-editor" element={<CodeEditor />} />
          <Route path="/sql-editor" element={<SQLEditor />} />
          <Route path="/submit-assignment" element={<AssignmentSubmission />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/teacher/profile" element={<TeacherProfile />} />
          <Route path="/coordinator/profile" element={<CoordinatorProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;