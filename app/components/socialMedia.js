import { IconCodepen, IconGitHub, IconInstagram, IconLinkedin, IconTwitter } from "./icons"
import './style.scss';

const SocialMedia = () => {
  return (
    <div className="social-media d-flex flex-row flex-xl-column justify-content-center">
      <a className="icon p-2" href="#"><IconCodepen/></a>
      <a className="icon p-2" href="#"><IconGitHub/></a>
      <a className="icon p-2" href="#"><IconInstagram/></a>
      <a className="icon p-2" href="#"><IconLinkedin/></a>
      <a className="icon p-2 mb-3" href="#"><IconTwitter/></a>
    </div>
  )
}

export default SocialMedia;