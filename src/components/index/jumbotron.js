import React from 'react';
import { gsap } from 'gsap';
import { Link } from 'gatsby';
import useThemePage from '../../hooks/use-theme-page';

const Jumbotron = () => {
  const { pageVisited } = useThemePage();
  const ref = React.useRef(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!pageVisited) {
      gsap.fromTo(
        element.querySelector('.jumbo-header'),
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.25,
          ease: 'power1.inOut',
        }
      );

      gsap.fromTo(
        element.querySelector('.jumbo-subheader'),
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          duration: 0.75,
        }
      );

      gsap.fromTo(
        element.querySelector('.button-container-jumbotron'),
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          delay: 1,
          duration: 1,
        }
      );
    }
  }, [pageVisited]);

  return (
    <div className='jumbotron-bg' ref={ref}>
      <div className='container'>
        <div className='jumbo-text'>
          <h2 className='jumbo-header reg-quincy'>
            I’m a UX/UI Designer & Front End Developer
          </h2>
          <h3 className='jumbo-subheader'>
            With a passion for user-centered solutions, problem-solving, and
            eternally learning. I love to figure out the best way to execute a
            clever solution, delving into the who, what and why. Good design and
            strong development are the cornerstone to a great digital
            experience.
          </h3>
          <div className='button-container-jumbotron'>
            <Link
              to='/work'
              className={`button dark ${
                Boolean(ref?.current) ? 'transition' : ''
              }`}
            >
              My Work
            </Link>
            <Link
              to='/contact'
              className={`button ${Boolean(ref?.current) ? 'transition' : ''}`}
            >
              Let's Chat!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
