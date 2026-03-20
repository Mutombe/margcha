import { useState, useEffect, useCallback } from 'react';
import { Moon, Sun } from '@phosphor-icons/react';

const DarkModeToggle = ({ className = '' }) => {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return false; // default to light, don't auto-detect system to avoid getting stuck
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggle = useCallback(() => setDark(prev => !prev), []);

  return (
    <button
      onClick={toggle}
      className={`relative p-2.5 rounded-xl transition-all duration-300 active:scale-90 ${className}`}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      <Sun
        size={18}
        weight="bold"
        className={`absolute inset-0 m-auto text-yellow-400 transition-all duration-300 ${dark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}
      />
      <Moon
        size={18}
        weight="bold"
        className={`transition-all duration-300 ${dark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
      />
    </button>
  );
};

export default DarkModeToggle;
