import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Importing a menu icon

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
      { name: 'Profile', href: '/teacher/profile' },
    ],
    coordinator: [
      { name: 'Dashboard', href: '/coordinator' },
      { name: 'Manage Users', href: '/coordinator/users' },
      { name: 'Profile', href: '/coordinator/profile' },
    ],
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-primary">
                Learning Platform
              </Link>
            </div>
            
            {/* Menu Icon for Small Screens */}
            <div className="ml-6 flex items-center sm:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-500 hover:text-gray-700"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links for Larger Screens */}
            <div className={`hidden sm:ml-6 sm:flex sm:space-x-8`}>
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
        
        {/* Dropdown Menu for Small Screens */}
        {isOpen && (
          <div className="sm:hidden">
            {navigation[userRole].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)} // Close menu on item click
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;