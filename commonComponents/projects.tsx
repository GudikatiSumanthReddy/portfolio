import Link from "next/link";

export default function Projects() {
  return (
    <section className="bg-black text-white py-5 container" id="projects">
      <h2 className="text-center text-warning fw-bold mb-4">PROJECTS</h2>

      <div className="row g-4">

        {/* Infakt Project */}
        <div className="col-12 col-md-4">
          <Link href="" className="text-decoration-none">
            <div className="card bg-dark text-white border-0 h-100" style={{ borderRadius: "15px" }}>
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                className="card-img-top img-fluid" style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px"
                }}
              />
              <div className="card-body d-flex justify-content-between">
                <span>Infakt – School Management</span>
                <span>↗</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Hinkapin Project */}
        <div className="col-12 col-md-4">
          <Link href="" className="text-decoration-none">
            <div className="card bg-dark text-white border-0 h-100" style={{ borderRadius: "15px" }}>
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f"
                className="card-img-top img-fluid" style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px"
                }}
              />
              <div className="card-body d-flex justify-content-between">
                <span>Hinkapin – Hospital Management</span>
                <span>↗</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Blood Bank Project */}
        <div className="col-12 col-md-4">
          <Link href="" className="text-decoration-none">
            <div className="card bg-dark text-white border-0 h-100" style={{ borderRadius: "15px" }}>
              <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b" className="card-img-top img-fluid" style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px"
              }} />
              <div className="card-body d-flex justify-content-between">
                <span>Blood Bank Application</span>
                <span>↗</span>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}