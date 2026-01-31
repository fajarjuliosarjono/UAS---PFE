import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ totalStudents }) => {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium leading-normal transition-colors ${isActive ? 'text-primary font-bold' : 'text-[#0d121b] dark:text-gray-300 hover:text-primary'}`;

  return (
    <header
      className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ebf3] dark:border-b-gray-800 bg-white dark:bg-[#1a2130] px-10 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-4 text-primary">
        <div className="size-6">
          <span className="material-symbols-outlined text-3xl">school</span>
        </div>
        <h2 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          System Informasi Akademik</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9 invisible md:visible">
          <NavLink className={linkClass} to="/">
            Dashboard
          </NavLink>
          <NavLink className={({ isActive }) => `text-sm font-semibold leading-normal ${isActive ? 'text-primary' : 'text-[#0d121b] dark:text-gray-300 hover:text-primary'}`} to="/students">
            Students
            <span className="ml-2 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
              {totalStudents}
            </span>
          </NavLink>
          <NavLink className={linkClass} to="/reports">
            Reports
          </NavLink>
        </nav>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBG2n8STHgzlvorgU-tJwHYlNpepE5wp8niALmgts0X_elAOW1k2maB_kdeYrGM0rg0VDR--eLQEwuzZATTWDslFN4Y9UaG9zHAH3sXTUqUF51_TnQcNXDzcZfWAu0qNTbeXDqUgO8ew8PBg4BBEn2RQJu_6Jo3I7fd5he09uXkjH6_YPJPq9Mn2_QbR_DSVJLL8uTmYQZaru-wJAcIu4pe3xIj4KO8D5dGq6UDKKhIgmAqFLkKWERRWhf9vnboQMQy5-fVSPv3rQQ")' }}>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
