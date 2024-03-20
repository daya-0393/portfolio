import './style.scss';
import { noto_sans_mono } from '../fonts';

const Email = () => {
  return (
    <div className={`${noto_sans_mono.className} email position-relative d-flex flex-column justify-content-center align-items-center`}>
      <a className='link my-4 mx-auto p-2 fs-7 lh-lg' href='#' style={{letterSpacing: '0.1em', writingMode: 'vertical-lr'}}>
        dayanalr0393@gmail.com
      </a>
    </div>
  )
}

export default Email;