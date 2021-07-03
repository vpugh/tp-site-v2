import { Link } from 'gatsby';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PersonalBlurb = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector('.blurb-container'),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.blurb-title',
          // markers: true,
          start: 'top center',
          end: 'bottom 80px',
        },
      }
    );
  }, []);

  return (
    <div ref={ref}>
      <div className='blurb-container'>
        <h2 className='blurb-title'>About Me</h2>
        <div className='blurb-text-container'>
          <p>
            Hi, I'm Tori Pugh. Currently working for Holman Enterprises as a
            Front-End Developer. I have 8 years experience as a front-end
            developer and UX/UI designer.
          </p>
          <p>
            For me, design is the culmination of conceptualizing and
            implementing a solution with an understanding of your audience and
            their needs then proceeding to solve problems using critical
            thinking skills.
          </p>
          <p>
            I use Javascript and React frameworks to develop interactive
            experiences and products. When creating solutions, I always thinking
            about the user first. I keep the balance of good looking UI with
            user experience, usability, and accessibility.
          </p>
          <Link className='textLink' to='/about'>
            — Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalBlurb;
