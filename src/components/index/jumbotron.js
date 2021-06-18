// import { Link } from 'gatsby';
import React from 'react';

const Jumbotron = () => {
  return (
    <div className='jumbotron-bg'>
      <div className='container'>
        <div className='jumbo-text'>
          <h2
            className='jumbo-header'
            data-sal='slide-up'
            data-sal-delay='500'
            data-sal-duration='1000'
            data-sal-easing='ease'
          >
            UI/UX Developer & Problem Solver
          </h2>
          <h3
            className='jumbo-subheader'
            data-sal='slide-up'
            data-sal-delay='1000'
            data-sal-duration='1000'
            data-sal-easing='ease'
          >
            Quick and constantly learning creative that loves creating great{' '}
            <span className='emphasize'>solutions</span>,{' '}
            <span className='emphasize'>coding</span> cool stuff, &{' '}
            <span className='emphasize'>designing</span> things. Striving to
            make things better than I found them.
          </h3>
          {/* <div className='jumbo-buttons'>
            <Link to='/work'>View My Work</Link>
            <Link to='/contact' className='highlighted-btn'>
              Contact Me
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
