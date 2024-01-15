import { IconCodepen, IconGitHub, IconInstagram, IconLinkedin, IconTwitter } from "./icons"
import './style.scss';

const SocialMedia = () => {
  return (
    <div className="social-media d-flex flex-column">
      <a className="p-2" href="#"><IconCodepen/></a>
      <a className="p-2" href="#"><IconGitHub/></a>
      <a className="p-2" href="#"><IconInstagram/></a>
      <a className="p-2" href="#"><IconLinkedin/></a>
      <a className="p-2 mb-3" href="#"><IconTwitter/></a>
    </div>
  )
}

export default SocialMedia;