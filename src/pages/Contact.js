// src/pages/Contact.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-center mb-4">
    <Icon className="w-6 h-6 text-brown dark:text-taupe mr-2" />
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const titleProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
  });

  const cardProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 300,
  });

  return (
    <div className="max-w-4xl mx-auto">
      <animated.h1 style={titleProps} className="text-4xl font-bold mb-6 text-center">
        Contact <span className="text-brown dark:text-taupe">Us</span>
      </animated.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* <animated.div style={cardProps}>
          <Card title="Get in Touch">
            <ContactInfo icon={Mail} title="Email" content="contact@bayonetbaron.tech" />
            <ContactInfo icon={Phone} title="Phone" content="(123) 456-7890" />
            <ContactInfo icon={MapPin} title="Address" content="123 Tech Street, Cyber City, 12345" />
          </Card>
        </animated.div> */}

        <animated.div style={cardProps}>
          <Card title="Send us a Message">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray dark:border-taupe rounded-md focus:outline-none focus:ring-2 focus:ring-brown focus:border-transparent bg-cream dark:bg-charcoal text-charcoal dark:text-cream transition-colors duration-300"
                  rows="4"
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2 inline-block" /> Send Message
              </Button>
            </form>
          </Card>
        </animated.div>
      </div>
    </div>
  );
};

export default Contact;