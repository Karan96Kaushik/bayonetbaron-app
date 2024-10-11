// src/pages/Home.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Code, Layout, Users } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <animated.div style={props}>
      <Card className="h-full flex flex-col items-center text-center">
        <Icon className="w-16 h-16 text-brown dark:text-taupe mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </Card>
    </animated.div>
  );
};

const Home = () => {
  const titleProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
  });

  const subtitleProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 300,
  });

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <animated.h1 style={titleProps} className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-brown dark:text-taupe">BayonetBaron.tech</span>
        </animated.h1>
        
        <animated.p style={subtitleProps} className="text-xl mb-8">
          Empowering your digital presence with cutting-edge CRM and landing page solutions
        </animated.p>

        <Button size="large" onClick={() => window.location.href='/contact'}>
          Get Started
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard 
          icon={Code}
          title="Custom CRM Solutions"
          description="Tailored CRM systems to streamline your business operations and enhance customer relationships."
        />
        <FeatureCard 
          icon={Layout}
          title="High-Converting Landing Pages"
          description="Expertly designed landing pages that capture attention and drive conversions."
        />
        <FeatureCard 
          icon={Users}
          title="User-Centric Approach"
          description="Focusing on user experience and satisfaction in every project we undertake."
        />
      </div>

      <Card className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to elevate your online presence?</h2>
        <p className="mb-6">Let's collaborate to create the perfect digital solution for your business.</p>
        <Link to="/projects">
          <Button>View Our Projects</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Home;