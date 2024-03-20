import { IconGitHub, IconExternal } from './icons';

const ProjectImageRight = ({title, description, technologies, projectImgUrl, repoLink, siteLink}) => {

  const techList = technologies.map((technology, index) => <span className='me-3' key={index}>{technology}</span>);

  return (
    <div className="row mb-5 flex-column-reverse flex-md-row">
      <div className='col-12 col-md-6'>
        <h3 className='text-secondary'>{title}</h3>
        <div className="bg-light-navy p-3" style={{ boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)' }}>
          <p className='m-0'>{description}</p>
        </div>
        <div className='py-3 text-mono fs-7'>
          {techList}
        </div>
        <div className="d-flex">
          <a href='#'><IconGitHub /></a>
          <a href='#'><IconExternal /></a>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="position-relative rounded"
          style={{
            backgroundImage: `url('${projectImgUrl}')`,
            backgroundSize: 'cover',
            height: '300px'
          }}>
          <div className="position-absolute w-100 h-100 bg-dark-cyan opacity-50 rounded z-1"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectImageRight;