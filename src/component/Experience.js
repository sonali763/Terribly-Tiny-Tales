import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <div >
      <h2>A Changing World Order</h2>
      {experiences.map((experience) => (
        <div key={experience.id}>
          <h3>{experience.title}</h3>
          <p>{experience.company}</p>
          <p>{experience.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
