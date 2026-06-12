export default function Experience() {
  return (
    <section className="bg-black text-white py-5" id="experience">
      <div className="container">

        <h2 className="text-center text-primary fw-bold mb-5">
          EXPERIENCE
        </h2>

        
        <div className="mb-5">
          <h5 className="fw-bold">
            Software Engineer 
            <span className="text-secondary fs-6"> | July 2025 – Present</span>
          </h5>
          <p className="text-secondary mb-3">
            SSQUARE INNOVATIONS SOFTLABS PVT LTD. | Bengaluru, India
          </p>

          {/* Project 1 */}
          <div className="mb-3">
            <h6 className="text-warning">Infakt – School Management Application</h6>
            <ul className="text-secondary small">
              <li>Developed scalable React.js frontend components for multi-role system.</li>
              <li>Built responsive UI using HTML5, CSS3, JavaScript.</li>
              <li>Integrated FastAPI REST APIs for dynamic data handling.</li>
              <li>Worked on roles: Super Admin, SME, Academic Head, Teacher, Student.</li>
              <li>Implemented modules: SME, AH, Subscription, School Admin.</li>
              <li>Developed Teacher & Student features (Tickets, Announcements).</li>
              <li>Followed reusable component architecture & clean coding.</li>
              <li>Worked in Agile (sprints, stand-ups, code reviews).</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div>
            <h6 className="text-warning">Hinkapin – Hospital Management Application</h6>
            <ul className="text-secondary small">
              <li>Built scalable React frontend for hospital system.</li>
              <li>Created responsive UI with cross-browser support.</li>
              <li>Integrated APIs for patient data & workflows.</li>
              <li>Worked on Admin, Doctor, Patient modules.</li>
              <li>Developed features like appointments, records, notifications.</li>
              <li>Improved performance and user experience.</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* ================= FENTASTECH ================= */}
        <div className="mt-5">
          <h5 className="fw-bold">
            Associate Developer 
            <span className="text-secondary fs-6"> | July 2024 – March 2025</span>
          </h5>
          <p className="text-secondary mb-3">
            Fentastech Pvt Ltd. | Hyderabad, India
          </p>

          <ul className="text-secondary small">
            <li>Developed responsive websites using HTML, CSS, JavaScript.</li>
            <li>Designed user-friendly UI layouts.</li>
            <li>Used media queries for responsiveness.</li>
            <li>Collaborated with team to deliver client requirements.</li>
            <li>Optimized performance and improved usability.</li>
            <li>Debugged frontend issues across devices.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}