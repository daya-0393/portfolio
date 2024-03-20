import Image from "next/image";
import ProfileImage from '/public/images/me.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3Alt, faHtml5, faJs, faNodeJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section className="section d-flex flex-column justify-content-center" id="about" style={{maxWidth: '900px'}}>
      <h2 className="numbered-heading text-start"><span className="text-primary">01. </span>About me</h2>
      <div className="row">
        <div className="col-sm-12 col-md-8 mb-5">
          <p className="pe-3">Hello! My name is Dayana, and I am a person with a lot of passions: singing, acting, and of course
            developing digital products/experiences, to mention a few. I like the idea of doing things that are out of the ordinary, 
            I always try to make a space on my day to day for creativity, brainstorming, and be myself in everything I do.
            My interest in web development started back in 2017, watching the process behind a project of a group of friends that had to make 
            a popular game in that moment called Flappy Bird. &#128513; 
            After that I started playing with cool platforms to learn development like code_academy,
            and finally in 2018 I decided to start my career in Web Design and Development. This year (2024), I am also venturing into the world of Digital Marketing.
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
        <div className="col-sm-12 col-md-4 d-flex justify-content-center d-none d-md-block">
          <div style={{maxWidth: '300px', height: '300px'}}>
            <Image src={ProfileImage} className="img-fluid rounded" alt="Headshot" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;