import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ContactPage = () => {
  return (
    <Layout>
      <div className='container'>
        <Seo title='Contact - Reach out!' />
        <div style={{ marginTop: 80 }}>
          <h2>Want to say hello!</h2>
          <div style={{ display: 'flex' }}>
            <p>
              Can always reach out to talk about a project, position, or
              anything design/development related.
            </p>
            <div>
              <input type='text' placeholder='Your Name' />
              <input type='text' placeholder='Your Email' />
              <textarea
                rows='4'
                placeholder='What did you want to talk about?'
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
