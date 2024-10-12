// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useTrail, animated, useSpring } from 'react-spring';
import { Code, Layout, Users } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

// New Firework component
const Particle = ({ x, y, angle, speed, size, color }) => {
  const props = useSpring({
    from: { translateX: 0, translateY: 0, opacity: 1, scale: 1 },
    to: async (next) => {
      await next({ translateX: Math.cos(angle) * speed * 200, translateY: Math.sin(angle) * speed * 200, opacity: 0.8, scale: 0.8, config: { duration: 3000 } });
      await next({ translateX: Math.cos(angle) * speed * 300, translateY: Math.sin(angle) * speed * 300 + 100, opacity: 0, scale: 0, config: { duration: 6000 } });
    },
    config: { mass: 1, tension: 120, friction: 10 },
  });

  return (
    <animated.div
      style={{
        position: 'fixed',
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1,
        transform: props.translateX.to((x, y, s) => `translate(${x}px, ${y}px) scale(${s})`),
        opacity: props.opacity,
        boxShadow: `0 0 ${size * 3}px ${size}px ${color}`,
      }}
    />
  );
};

const Firework = ({ x, y }) => {
  const [particles, setParticles] = useState([]);
  const [position, setPosition] = useState({ x, y }); 

  useEffect(() => {
    const particleCount = 80;
    const newParticles = Array.from({ length: particleCount }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const initialDistance = Math.random() * 150; // Random initial distance up to 50px
      return {
        x: position.x + Math.cos(angle) * initialDistance,
        y: position.y + Math.sin(angle) * initialDistance,
        angle: Math.random() * Math.PI * 2,
        speed: 2 + Math.random() * 40,
        size: 2 + Math.random() * 30,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      };
    });
    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
    }, 1500);

    return () => clearTimeout(timer);
  }, [position]);

  return (
    <>
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} />
      ))}
    </>
  );
};

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [showFirework, setShowFirework] = useState(false);

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setMousePosition({ x: event.clientX, y: event.clientY });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   const fireworkInterval = setInterval(() => {
  //     setShowFirework(true);
  //     setTimeout(() => setShowFirework(false), 10);
  //   }, 30);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     clearInterval(fireworkInterval);
  //   };
  // }, []);

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
    <div className="max-w-6xl mx-auto px-4 relative">
      {/* {showFirework && (
        <Firework x={mousePosition.x} y={mousePosition.y} />
      )} */}
      
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