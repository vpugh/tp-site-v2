import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='container'>
        <div className='footer-container'>
          <div className='footer-cta'>
            <h3 className='cta-title'>Get In Touch!</h3>
            <p className='cta-text'>
              If you've got an inquiry for a job or project, a general question,
              or something I didn't specify.
            </p>
            <p className='cta-text'>
              Drop me a line:{' '}
              <a
                className='text-link'
                href='mailto:hello@toripugh.com?subject=Hey Tori!'
              >
                hello@toripugh.com
              </a>
            </p>
          </div>
          <div>
            <p className='footer-social-title'>Follow on Social Media</p>
            <ul className='footer-social'>
              <li>
                <a
                  href='https://twitter.com/teekatwo'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='https://dribbble.com/teekatwo'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/vpugh'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/toripugh/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://dev.to/teekatwo'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Dev.to
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className='copyright'>© 2021 Tori Pugh. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
