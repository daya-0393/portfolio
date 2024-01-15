import ProjectImageLeft from '../projectImageLeft';
import ProjectImageRight from '../projectImageRight';

const Projects = () => {



  return (
    <section id='projects'>
      <h2 className="numbered-heading text-start"><span className="text-primary">02. </span>My projects</h2>
      <div className="container">
        <ProjectImageLeft 
          title="Project 1" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia dapibus mauris eget porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla a ex nec diam venenatis mattis at at est. Pellentesque magna massa, congue sit amet velit in, porttitor ultricies metus."
          technologies={['Item1', 'Item2', 'Item3', 'Item4']}
          projectImgUrl="/images/project1.png"
        />
        <ProjectImageRight 
          title="Project 1" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia dapibus mauris eget porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla a ex nec diam venenatis mattis at at est. Pellentesque magna massa, congue sit amet velit in, porttitor ultricies metus."
          technologies={['Item1', 'Item2', 'Item3', 'Item4']}
          projectImgUrl="/images/project1.png"
        />
        <ProjectImageLeft 
          title="Project 1" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia dapibus mauris eget porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla a ex nec diam venenatis mattis at at est. Pellentesque magna massa, congue sit amet velit in, porttitor ultricies metus."
          technologies={['Item1', 'Item2', 'Item3', 'Item4']}
          projectImgUrl="/images/project1.png"
        />
      </div>
    </section>
  )
}

export default Projects;