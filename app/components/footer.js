import { IconCodepen, IconGitHub, IconInstagram, IconLinkedin, IconTwitter } from "./icons"

const Footer = () => {
  return (
    <footer>
      <div className="social-media d-flex flex-row d-md-none">
        <a className="p-2" href="#"><IconCodepen/></a>
        <a className="p-2" href="#"><IconGitHub/></a>
        <a className="p-2" href="#"><IconInstagram/></a>
        <a className="p-2" href="#"><IconLinkedin/></a>
        <a className="p-2 mb-3" href="#"><IconTwitter/></a>
      </div>
      <div className="text-center">
        <p className="text-mono fs-7 m-0">Designed by Brittany Chiang</p>
        <p className="text-mono fs-7 m-0">Built by Dayana Loaiza</p>
      </div>
    </footer>
  )
}

export default Footer;