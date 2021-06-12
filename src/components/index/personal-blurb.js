import { Link } from 'gatsby';
import React from 'react';

const PersonalBlurb = () => {
  return (
    <div style={{ padding: '180px 0 120px 0' }}>
      <h2 style={{ fontSize: 36 }}>About Me</h2>
      <div style={{ fontSize: 24, maxWidth: '80%' }}>
        <p>
          I'm Tori, a UI/UX Developer. Currently working for Holman Enterprises
          as a Front-End Developer.
        </p>
        <p>
          I have 8 years experience as a front-end developer and designer. For
          me design is the culmination of conceptualizing and implementing a
          solution, with an understanding of your audience and their needs then
          proceeding to solve problems using critical thinking skills.
        </p>
        <p>
          I use Javascript and React frameworks to develop interactive
          experiences and products. When creating solutions, I always thinking
          about the user first. I keep the balance of good looking UI with user
          experience, usability, and accessibility.
        </p>
        <Link
          style={{ textDecoration: 'none', color: 'var(--textColor)' }}
          to='/about'
        >
          — Read More
        </Link>
      </div>
    </div>
  );
};

export default PersonalBlurb;
