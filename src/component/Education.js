import React from 'react';

const Education = ({ educations }) => {
  return (
    <div>
      <h2>Indian vs Australia</h2>
      {educations.map((education) => (
        <div key={education.id}>
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
          <p>{education.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
