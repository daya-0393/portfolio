import { noto_sans_mono } from "../fonts";

const Header = () => {
  return (
    <header className={`${noto_sans_mono.className} position-fixed w-100 start-0 top-0 py-2 px-2 px-md-5 bg-`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Dayana</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#53eafb" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link fs-7 active" aria-current="page" href="/#about"><span className="text-primary">01. </span>About</a>
              <a className="nav-link fs-7" href="/#projectse"><span className="text-primary">02. </span>Projects</a>
              <a className="nav-link fs-7" href="#"><span className="text-primary">03. </span>Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;