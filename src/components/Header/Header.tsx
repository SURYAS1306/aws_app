import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
        <nav className="flex gap-4">
          <a href="https://github.com" className="text-gray-500 hover:text-gray-700">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-500 hover:text-gray-700">
            <Mail className="w-6 h-6" />
          </a>
        </nav>
      </div>
    </header>
  );
}