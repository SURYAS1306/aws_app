import React from 'react';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with React and Node.js',
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      tags: ['React', 'TypeScript', 'Redux'],
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking application',
      imageUrl: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8',
      tags: ['React', 'API Integration', 'Charts'],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}