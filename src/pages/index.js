import * as React from 'react';
import Jumbotron from '../components/jumbotron';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <>
      <Jumbotron />
      <Layout floatNav>
        <div className='container'>
          <h1>Test Content</h1>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
