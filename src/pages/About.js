// src/pages/About.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Card from '../components/Card';
import { Code, Users, Layout } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <animated.div style={props}>
      <Card className="h-full">
        <div className="flex flex-col items-center">
          <Icon className="w-12 h-12 text-brown dark:text-taupe mb-4" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-center">{description}</p>
        </div>
      </Card>
    </animated.div>
  );
};

const About = () => {
  const titleProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
  });

  return (
    <div className="max-w-4xl mx-auto">
      <animated.h1 style={titleProps} className="text-4xl font-bold mb-6 text-center">
        About <span className="text-brown dark:text-taupe">BayonetBaron.tech</span>
      </animated.h1>
      
      <Card className="mb-8">
        <p className="text-lg mb-4">
          BayonetBaron.tech is a specialized web development business focusing on two key areas: CRM software and landing page design. As an experienced web developer, I create tailored solutions to help businesses streamline their operations and boost their online presence.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <FeatureCard 
          icon={Code}
          title="CRM Software"
          description="Custom solutions for effective customer relationship management and improved sales processes."
        />
        <FeatureCard 
          icon={Layout}
          title="Landing Pages"
          description="High-converting designs that capture attention and drive user engagement."
        />
        <FeatureCard 
          icon={Users}
          title="User-Centric Approach"
          description="Focusing on user experience and satisfaction in every project."
        />
      </div>

      <Card>
        <p className="text-lg">
          With a passion for clean code and user-centric design, I bring a unique blend of technical skill and creative problem-solving to every project I undertake.
        </p>
      </Card>
    </div>
  );
};

export default About;