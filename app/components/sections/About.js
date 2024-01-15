import Image from "next/image";
import ProfileImage from '/public/images/me.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3Alt, faHtml5, faJs, faNodeJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section className="d-flex flex-column vh-100 min-vh-100 justify-content-center" id="about" style={{maxWidth: '900px'}}>
      <h2 className="numbered-heading text-start"><span className="text-primary">01. </span>About me</h2>
      <div className="row">
        <div className="col-sm-12 col-md-8 mb-5">
          <p className="pe-3">Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest 
            in web development started back in 2012 when I decided to try editing custom Tumblr themes — 
            turns out hacking together a custom reblog button taught me a lot about HTML & CSS! Fast-forward 
            to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, 
            and a student-led design studio. My main focus these days is building accessible, inclusive products 
            and digital experiences at Upstatement for a variety of clients.
          </p>
          <div className="d-flex flex-wrap mt-5 pe-3">
            <div className="me-4">
              <FontAwesomeIcon icon={faHtml5} width={50} height={50}/>
              <span className="text-mono fs-7 d-block text-center">html</span>
            </div>
            <div className="me-4">
              <FontAwesomeIcon icon={faCss3Alt} width={50} height={50}/>
              <span className="text-mono fs-7 d-block text-center">css</span>
            </div>
            <div className="me-4">
              <FontAwesomeIcon icon={faSass} width={50} height={50}/>
              <span className="text-mono fs-7 d-block text-center">sass</span>
            </div>
            <div className="me-4">
              <FontAwesomeIcon icon={faJs} width={50} height={50}/>
              <span className="text-mono fs-7 d-block text-center">javascript</span>
            </div>
            <div className="me-4">
              <FontAwesomeIcon icon={faReact} width={50} height={50}/>
              <span className="text-mono fs-7 d-block text-center">react</span>
            </div>
            <div className="me-4">
              <FontAwesomeIcon icon={faNodeJs} width={50} height={50 }/>
              <span className="text-mono fs-7 d-block text-center">node.js</span>
            </div>
            <div className="me-4">
              <FontAwesomeIcon icon={faBootstrap} width={50} height={50}/>
              <span className="text-mono fs-7 d-block text-center">bootstrap</span>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 d-flex justify-content-center">
          <div style={{maxWidth: '300px', height: '300px'}}>
            <Image src={ProfileImage} className="img-fluid rounded" alt="Headshot" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;