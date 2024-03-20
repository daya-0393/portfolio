import { IconCodepen, IconGitHub, IconInstagram, IconLinkedin, IconTwitter } from "./icons"
import SocialMedia from "./socialMedia";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="d-block d-xl-none">
        <SocialMedia/>
      </div>
      <div className="text-center">
        <p className="text-mono fs-7 m-0">Design by Brittany Chiang</p>
        <p className="text-mono fs-7 m-0">Built by Dayana Loaiza</p>
      </div>
    </footer>
  )
}

export default Footer;