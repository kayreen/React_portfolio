import React from "react";

function Skills() {
  const skills = ["JavaScript", "React.js", "HTML", "CSS", "Node.js"];
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
