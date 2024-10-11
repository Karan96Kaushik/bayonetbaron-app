import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate about creating amazing web applications!',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically send the updated profile to a server
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">User Profile</h1>
      <Card title="Profile Information">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <Input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="bio">
                Bio
              </label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
                placeholder="Enter your bio"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                rows="3"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button onClick={() => setIsEditing(false)} variant="secondary">
                Cancel
              </Button>
              <Button type="submit">
                Save Changes
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-gray-800 dark:text-gray-200">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Bio:</strong> {profile.bio}</p>
            <div className="mt-4">
              <Button onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Profile;