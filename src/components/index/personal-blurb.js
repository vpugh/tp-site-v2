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
        <div className='blurb-text-container'>
          <h2 className='blurb-title bold-quincy'>Little About Me</h2>
          <p>
            Hello, I'm Tori Pugh — a Front-End Developer currently working for
            Holman Enterprises. I'm constantly trying to balance the power and
            beauty of design and the practicality and usability of development.
            I strive to make things that look great and work equally as well.
          </p>
          <p>
            I love to learn and also enjoy teaching or speaking about my
            experiences. I give talks at conferences when I can and share some
            content on dribbble when I get a chance.
          </p>
          <Link className='button dark blurb-button' to='/about'>
            More About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalBlurb;
