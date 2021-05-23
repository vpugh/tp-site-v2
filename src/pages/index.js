import * as React from 'react';
import Jumbotron from '../components/index/jumbotron';
import WorkPreview from '../components/index/work-preview';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <>
      <Jumbotron />
      <Layout floatNav>
        <div className='container'>
          {/* Work Sample Portion */}
          <WorkPreview />
          {/* Blog Sample Portion */}
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
