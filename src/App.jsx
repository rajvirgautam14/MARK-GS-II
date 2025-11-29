import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import RecentListings from './components/RecentListings';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <div className={`min-h-screen app-background font-sans ${theme === 'dark' ? 'dark' : ''}`} style={{
      selectionBG: theme === 'dark' ? 'rgb(34, 211, 238, 0.3)' : 'rgb(165, 243, 252)',
      selectionColor: theme === 'dark' ? 'rgb(165, 243, 252)' : 'rgb(8, 145, 178)'
    }}>
      <Navbar isDark={theme === 'dark'} toggleTheme={toggleTheme} />
      <Hero />
      <Categories />
      <RecentListings />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
