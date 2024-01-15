'use client'


const Hero = () => {
  return (
    <section className="min-vh-100 vh-100" id="hero">
      <div className='d-flex flex-column justify-content-center h-100'>
        <div style={{transitionDelay:'100ms'}}>
          <h3 className="text-primary text-mono fs-5">Hi, my name is</h3>
        </div>
        <div style={{transitionDelay:'200ms'}}>
          <h1 className="" style={{fontSize: 'clamp(40px, 8vw, 70px)'}}>Dayana Loaiza Rivera.</h1>
        </div>
        <div style={{transitionDelay:'300ms'}}>
          <h2 style={{fontSize: 'clamp(30px, 7vw, 60px)'}}>I am a Web Developer,</h2>
        </div>
        <div className="pt-1 pb-2" style={{transitionDelay:'400ms', maxWidth: '540px'}}>
          <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at</p>
        </div>  
        <a className="button-primary">Resume</a>
      </div>
    </section>
  )
} 

export default Hero;