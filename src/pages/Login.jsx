import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'student'
  });

  const mockCredentials = {
    student: { username: 'student', password: 'student123' },
    teacher: { username: 'teacher', password: 'teacher123' },
    coordinator: { username: 'coordinator', password: 'coordinator123' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const roleCredentials = mockCredentials[formData.role];
    if (formData.username === roleCredentials.username && 
        formData.password === roleCredentials.password) {
      localStorage.setItem('userRole', formData.role);
      navigate(`/${formData.role}`);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img 
            src="https://www.reshot.com/preview-assets/icons/GXRASTYQ58/reading-book-GXRASTYQ58.svg" 
            className="mx-auto h-14" 
            style={{ display: 'flex', justifyContent: 'center' }} 
            alt="Logo"
          />
          <h1 className="mt-6 text-center text-3xl font-extrabold text-purple-900">
            E-Submitt
          </h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="input-field rounded-t-md"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-field rounded-b-md"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              className="mt-1 input-field"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="coordinator">Coordinator</option>
            </select>
          </div>

          <div>
            <button type="submit" className="btn-primary w-full">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
