import React from 'react';
import Header from './component/Header';
import Profile from './component/Profile';
import Experience from './component/Experience';
import Education from './component/Education';
import './component/style.css';

const user = {
  name: 'John Doe',
  headline: 'Software Engineer',
  location: 'City, Country',
  summary: 'Experienced software engineer with a passion for coding...',
};

const experiences = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'ABC Inc.',
    date: 'Jan 2020 - Present',
  },
  // Add more experiences as needed
];

const educations = [
  {
    id: 1,
    school: 'University XYZ',
    degree: 'Bachelor of Science in Computer Science',
    date: '2016 - 2020',
  },
  // Add more educations as needed
];

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Profile user={user} />
      <Experience experiences={experiences} /> 
       <Education educations={educations} />
    </div>
  );
};

export default App;
