import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;