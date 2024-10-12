// src/pages/Projects.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Card from '../components/Card';
import Button from '../components/Button';
import { Code, Layout, Shield } from 'lucide-react';

const ProjectCard = ({ icon: Icon, title, description, link }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <animated.div style={props}>
      <Card className="h-full flex flex-col">
        <div className="flex items-center mb-4">
          <Icon className="w-8 h-8 text-brown dark:text-taupe mr-2" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="flex-grow mb-4">{description}</p>
        {/* <Button onClick={() => window.open(link, '_blank')}>
          View Project
        </Button> */}
      </Card>
    </animated.div>
  );
};

const Projects = () => {
  const titleProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
  });

  const projects = [
    { 
      icon: Code,
      title: "CRM System for Startups", 
      description: "A custom CRM solution designed to streamline customer management and boost sales efficiency.",
      link: "#"
    },
    { 
      icon: Layout,
      title: "Company Landing Pages", 
      description: "High-converting landing pages for products, services, and more.",
      link: "#"
    },
    { 
      icon: Shield,
      title: "Secure Client Portal", 
      description: "Secure client portal for a financial services company, ensuring data protection and ease of use.",
      link: "#"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <animated.h1 style={titleProps} className="text-4xl font-bold mb-8 text-center">
        Our <span className="text-brown dark:text-taupe">Projects</span>
      </animated.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;