import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ContactPage = () => {
  return (
    <Layout>
      <div className='container'>
        <Seo title='Contact - Reach out!' />
        <div className='contact-form-container'>
          <h2 className='contact-title bold-quincy'>Want to say hello!</h2>
          <p className='availability'>
            My availability is:{' '}
            <span className='availability-status'>Available for work</span>
          </p>
          <p className='contact-subheader'>
            Can always reach out to talk about a project, position, or anything
            design/development related.
          </p>
          <form method='POST' data-netlify='true' className='contact-form'>
            <input type='text' placeholder='Your Name' />
            <input type='email' placeholder='Your Email' />
            <textarea rows='4' placeholder='What did you want to talk about?' />
            <button type='submit' className='button dark transition'>
              Send Email
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
