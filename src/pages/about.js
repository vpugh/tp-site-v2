import React from 'react';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import { gsap } from 'gsap';

const AboutPage = ({ data }) => {
  const ref = React.useRef(null);
  const file = data.allFile.edges[0].node;

  React.useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.about-image'),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      element.querySelector('.about-hero-title'),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      element.querySelector('.about-hero-subheader'),
      {
        opacity: 0,
        y: 70,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power1.inOut',
        delay: 0.5,
      }
    );

    gsap.fromTo(
      element.querySelector('.button'),
      {
        opacity: 0,
        y: 70,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power1.inOut',
        delay: 0.5,
      }
    );

    gsap.fromTo(
      element.querySelector('.about-main'),
      {
        opacity: 0,
        y: 40,
      },
      {
        delay: 1,
        opacity: 1,
        duration: 0.5,
        y: 0,
      }
    );
  }, []);

  return (
    <Layout>
      <Seo title='About' />
      <div className='container' ref={ref}>
        <div className='about-hero-container'>
          <div className='about-hero-text'>
            <h3 className='about-hero-title reg-quincy'>
              Driven by curiosity &amp; a desire to make things work better.
            </h3>
            <p className='about-hero-subheader'>
              I listen to understand a problem, do research to identify and/or
              confirm it, and then create solutions for them.
            </p>
            <a
              className='button light resume-button'
              href='../tpr.pdf'
              download='tori-pugh-resume'
            >
              Download Resume
            </a>
          </div>
          <div className='about-image-container'>
            <GatsbyImage
              alt='Picture of Tori Pugh'
              className='about-image'
              image={file.childrenImageSharp[0].gatsbyImageData}
            />
          </div>
        </div>
        <div className='about-main'>
          <div>
            <div className='about-main-body'>
              <p>
                I'm a naturally curious person who thrives on knowing how
                everything works. This attitude is especially helpful in the
                design and development world. I ask a lot of questions, do
                extensive research, and consider all aspects of what I'm making
                and who I'm making it for. The more knowledge at my fingertips,
                the better solution I can make.
              </p>
              <p>
                The changing world of tech, makes a person who constantly learns
                (me!) very happy. I'm quite adaptable to using any tech,
                workflow, strategies, etc. If someone is willing to educate me
                or there is some method of self-learning, I'll be able to pick
                it up since I can learn new things at amazing speeds. I take
                great enjoyment in trying to find more efficient ways to create
                things and upcoming technologies. I’m always looking to expand
                my knowledge through online learning, classes, going to
                conferences, or reading articles.
              </p>
              <p>
                I’m a UI/UX developer who is passionate about creating products
                that puts the users first. I want to make products work better
                and easier to use. I've worked in different capacities as a
                visual designer, front-end developer, and email developer.
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
                In code creation, I strive for readable, clean, and efficient
                code. I'm a firm believer in breaking down the pieces as much as
                I can to keep everything clear and unmuddled. It creates more
                files but then those files are just doing one thing.
              </p>
              <p>
                When I've done something worth talking about I like to blog
                about new technology I've tried or problems I've run into with a
                project. I've got a few side projects that I've been working on.
                It helps me use new tech and brush up on my skills in a fairly
                forgiving environment.
              </p>
              <p>
                Before I make my side projects, I sit down and plan out the
                structure and definetly decide on the design. Some fancy designs
                change drastically when put the test of being accessible and
                user-friendly.
              </p>
              <p>
                Non-computer related activites are vast, I spread my attention
                across many medias. I'm extremely behind on viewing great
                Netflix shows. I'm an avid reader with a ever-growing backlog of
                books, I keep buying but don't read them. Trying to get through
                my game collection for the PS4 and Switch, currently heavily
                involved in Assassin's Creed Valhalla, Breath of the Wild.
              </p>
            </div>
          </div>
          <div className='about-sidebar'>
            <div className='divided-sections'>
              <h2>Work</h2>
              <div>
                <h4 className='work-title'>Oct 2018 - Present</h4>
                <p className='work-info'>
                  <span className='company'>Holman Enterprises</span>
                  <br />
                  Front End Developer
                </p>
              </div>
              <div>
                <h4 className='work-title'>Feb 2018 - Oct 2018</h4>
                <p className='work-info'>
                  <span className='company'>Creative Circle</span>
                  <br />
                  Front End Developer/Designer
                </p>
              </div>
              <div>
                <h4 className='work-title'>Oct 2017 - Feb 2018</h4>
                <p className='work-info'>
                  <span className='company'>MNG Direct</span>
                  <br />
                  Email Developer
                </p>
              </div>
              <div>
                <h4 className='work-title'>Mar 2013 - Oct 2017</h4>
                <p className='work-info'>
                  <span className='company'>AEGIS Communications</span>
                  <br />
                  Front End Designer/Email Developer
                </p>
              </div>
            </div>
            <div className='divided-sections'>
              <h2>Tools & Skills</h2>
              <div className='ts-section'>
                <h3>Design</h3>
                <p>
                  Responsive Web Design, UX/UI, Interaction Design, Typography,
                  Branding, Prototyping, Email Design, Design Strategy
                </p>
                <p>Sketch, Figma, Adobe Suite, Affinity Designer</p>
              </div>
              <div className='ts-section'>
                <h3>Development</h3>
                <p>
                  HTML, CSS, SASS/SCSS, Javascript, Git, NodeJs, Vue, React,
                  Jest, Gatsby, Wordpress, React Testing Library, Styled
                  Components
                </p>
                <p>
                  GitHub, VSCode, Webstorm, SendGrid, MailChimp, Affinity
                  Designer, Storybook
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
