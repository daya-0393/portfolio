import Header from "./header";
import Side from "./side";
import SocialMedia from "./socialMedia";
import Email from "./email";
import Footer from "./footer";
import './style.scss';

const Layout = ({children}) => {
  return (
    <div className="container position-relative">
      <Header/>
      <Side position="left">
        <SocialMedia/>
      </Side>
      <Side position="right">
        <Email/>
      </Side>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout;