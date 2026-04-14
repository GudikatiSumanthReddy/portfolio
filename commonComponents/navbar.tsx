export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary px-3 px-md-5">
      
      {/* Logo */}
      <a className="navbar-brand fw-bold fs-5" href="#">
        SR
      </a>

      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu */}
      <div id="nav" className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav text-center gap-lg-4">

          <li className="nav-item">
            <a className="nav-link fw-bold fs-5 text-white" href="#home">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-bold fs-5 text-white" href="#projects">Projects</a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-bold fs-5 text-white" href="#experience">Experience</a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-bold fs-5 text-white" href="#contact">Contact</a>
          </li>

        </ul>
      </div>

    </nav>
  );
}