import { Link } from 'gatsby';
import React from 'react';

const PersonalBlurb = () => {
  return (
    <div className='blurb-container'>
      <h2 className='blurb-title'>About Me</h2>
      <div className='blurb-text-container'>
        <p>
          Currently working for Holman Enterprises as a Front-End Developer. I
          have 8 years experience as a front-end developer and UX/UI designer.
        </p>
        <p>
          For me, design is the culmination of conceptualizing and implementing
          a solution with an understanding of your audience and their needs then
          proceeding to solve problems using critical thinking skills.
        </p>
        <p>
          I use Javascript and React frameworks to develop interactive
          experiences and products. When creating solutions, I always thinking
          about the user first. I keep the balance of good looking UI with user
          experience, usability, and accessibility.
        </p>
        <Link className='textLink' to='/about'>
          — Read More
        </Link>
      </div>
    </div>
  );
};

export default PersonalBlurb;
