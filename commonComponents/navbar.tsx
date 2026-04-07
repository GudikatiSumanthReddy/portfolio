export default function Navbar() {
  return (
    <nav className="no-smoke navbar navbar-expand-lg navbar-dark bg-secondary px-3 px-md-5">
      <div className="d-flex flex-row justify-content-between w-100">
        
        <a className="navbar-brand fw-bold text-white fw-bold fs-5" href="#">
          SR
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav gap-lg-4 text-center">
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-5" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-5" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-5" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-5" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}