import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Don't show navbar on login page
  if (location.pathname === '/') {
    return null;
  }
  
  // Mock user data - replace with actual auth logic
  const userRole = localStorage.getItem('userRole') || 'student';
  
  const navigation = {
    student: [
      { name: 'Dashboard', href: '/student' },
      { name: 'Assignments', href: '/student/assignments' },
      { name: 'Profile', href: '/profile' },
    ],
    teacher: [
      { name: 'Dashboard', href: '/teacher' },
      { name: 'Review Assignments', href: '/teacher/review' },
    ],
    coordinator: [
      { name: 'Dashboard', href: '/coordinator' },
      { name: 'Manage Users', href: '/coordinator/users' },
    ],
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-primary">
                E-Submitt
              </Link>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation[userRole].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'border-primary text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={() => {
                localStorage.removeItem('userRole');
                window.location.href = '/';
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;