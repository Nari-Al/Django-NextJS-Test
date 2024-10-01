"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in by checking localStorage for the access token
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Clear the access token from localStorage on logout
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    router.push('/login'); // Redirect to login page
  };

  return (
      <header>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/search_page">QR-Code</a></li>
            <li><a href="/todos">To Do</a></li>
          </ul>
          {isLoggedIn ? (
            <button className="login-button" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="login-button" onClick={() => router.push('/login')}>Login</button>
          )}
        </header>
  );
};

