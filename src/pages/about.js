import React from 'react';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Seo from '../components/seo';

const AboutPage = ({ data }) => {
  const file = data.allFile.edges[0].node;
  return (
    <Layout>
      <Seo title='About Me' />
      <div className='container'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <GatsbyImage
            alt='Picture of Tori Pugh'
            image={file.childrenImageSharp[0].gatsbyImageData}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 550,
              marginLeft: 48,
            }}
          >
            <h3
              style={{
                fontSize: 48,
                lineHeight: '50px',
                margin: 0,
                fontWeight: '800',
              }}
            >
              Driven by curiosity and a desire to make things work better.
            </h3>
            <p style={{ fontSize: 24 }}>
              I listen to understand a problem, do research to identify and/or
              confirm it, and then create solutions for them.
            </p>
            <div className='button'>My Resume</div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 60,
          }}
        >
          <div style={{ maxWidth: 675 }}>
            <div className='about-main-body'>
              <h2>Overview</h2>
              <p>
                I’m a UI/UX developer who is passionate about creating products
                that puts the users first. I want to make products that run
                better and are easier for the user. I've had varied involvement
                as a visual designer, front-end developer, or email developer. I
                think there should always be an aspect of user-experience
                understanding in design, development, or email creation.
              </p>
              <p>
                The idea — “design is more then making it pretty” — is my
                driving principle. Design is the culmination of creation and
                execution of a solution; understanding your audience; and
                critical thinking skills to solve problems. This combination of
                thought and execution is what I find most enjoyable and
                rewarding.
              </p>
              <p>
                My greatest asset is my eternal passion for learning, due in
                part to my constant curiosity. I can learn new things at amazing
                speeds. I take great enjoyment in trying to find more efficient
                ways to create things and upcoming technologies. I’m always
                looking to expand my knowledge through online learning, classes,
                going to conferences, or reading articles.
              </p>
            </div>
            <div className='about-main-body'>
              <h2>Work</h2>
              <p>
                I'm currently employed at Holman Enterprises, were we are
                building innovative products for the automotive industry.
              </p>
            </div>
            <div className='about-main-body'>
              <h2>My Life</h2>
              <p>
                I share and interact on Twitter; get inspired and showcase a job
                on Dribbble; tinker and learn new code on Codepen; work on side
                projects on Github; and write when I can on Medium or Dev.to.
              </p>
              <p>
                In my free time I spread my attention across many medias. I'm
                extremely behind on viewing great Netflix shows. I'm an avid
                reader with a ever-growing backlog of books, I keep buying but
                don't read them. Trying to get through my game collection for
                the PS4, currently heavily involved in Assassin's Creed
                Valhalla, Breath of the Wild.
              </p>
            </div>
          </div>
          <div className='about-sidebar' style={{ maxWidth: 400 }}>
            <div className='divided-sections'>
              <h2>Work</h2>
              <div>
                <h4 className='work-title'>Oct 2018 - Present</h4>
                <p className='work-info'>
                  UX/UI Developer, <em>Holman Enterprises</em>
                </p>
              </div>
              <div>
                <h4 className='work-title'>Feb 2018 - Oct 2018</h4>
                <p className='work-info'>
                  Front End Developer/Designer, <em>Creative Circle</em>
                </p>
              </div>
              <div>
                <h4 className='work-title'>Oct 2017 - Feb 2018</h4>
                <p className='work-info'>
                  Email Developer, <em>MNG Direct</em>
                </p>
              </div>
              <div>
                <h4 className='work-title'>Mar 2013 - Oct 2017</h4>
                <p className='work-info'>
                  Front End Designer/Email Developer,{' '}
                  <em>AEGIS Communications</em>
                </p>
              </div>
            </div>
            <div className='divided-sections'>
              <h2>Tools & Skills</h2>
              <div className='ts-section'>
                <h3>Design</h3>
                <h4>Skills:</h4>
                <p>
                  Responsive Web Design, UX/UI, Interaction Design, Typography,
                  Branding, Prototyping, Email Design, Design Strategy
                </p>
                <h4>Tools:</h4>
                <p>Sketch, Figma, Adobe Suite, Affinity Designer</p>
              </div>
              <div className='ts-section'>
                <h3>Development</h3>
                <h4>Skills:</h4>
                <p>
                  HTML, CSS, SASS/SCSS, Javascript, Git, NodeJs, Vue, React,
                  Jest, Gatsby, Wordpress, React Testing Library
                </p>
                <h4>Tools:</h4>
                <p>
                  GitHub, VSCode, Webstorm, SendGrid, MailChimp, Affinity
                  Designer
                </p>
              </div>
            </div>
            <div className='divided-sections'>
              <h2>Speaking Events</h2>
              <p>Codeland 2018</p>
              <p>WordCamp Philly 2018</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const personalImage = graphql`
  query getPersonalImage {
    allFile(filter: { name: { eq: "personal-image" } }) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(
              width: 500
              height: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`;
