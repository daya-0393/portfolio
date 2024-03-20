'use client'


const Hero = () => {
  return (
    <section className="section mt-5" id="hero">
      <div className='d-flex flex-column justify-content-center h-100'>
        <div style={{transitionDelay:'100ms'}}>
          <h3 className="text-primary text-mono fs-5">Hi, my name is</h3>
        </div>
        <div style={{transitionDelay:'200ms'}}>
          <h1 className="" style={{fontSize: 'clamp(40px, 8vw, 70px)'}}>Dayana Loaiza</h1>
        </div>
        <div style={{transitionDelay:'300ms'}}>
          <h2 style={{fontSize: 'clamp(30px, 7vw, 60px)'}}>I am a Web Developer,</h2>
        </div>
        <div className="pt-1 pb-2" style={{transitionDelay:'400ms', maxWidth: '540px'}}>
          <p>And a Digital Marketing specialist in progress. I like to study human behavior and based on that, I like to build 
            great products and experiences.
          </p>
        </div>  
        <a className="button-primary">Resume</a>
      </div>
    </section>
  )
} 

export default Hero;