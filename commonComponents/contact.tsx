export default function Contact() {
  return (
    <section className="bg-black text-white py-5" id="contact">
      <div className="container text-center">

        <h2 className="fw-bold mb-4">Contact</h2>

        <p className="text-secondary mx-auto col-12 col-md-8 col-lg-6">
          I'm a Full Stack Developer specializing in React.js and scalable web applications.
          Feel free to reach out for opportunities or collaborations.
        </p>

        {/* Contact Info */}
        <div className="mt-4">

          {/* Phone */}
          <p>
            <i className="bi bi-telephone me-2"></i>
            <a href="tel:9849263688" className="text-white text-decoration-none">
              9849263688
            </a>
          </p>

          {/* Email */}
          <p>
            <i className="bi bi-envelope me-2"></i>
            <a
              href="mailto:sumanthreddygudikati@gmail.com"
              className="text-white text-decoration-none"
            >
              sumanthreddygudikati@gmail.com
            </a>
          </p>

        </div>

        {/* Social Links */}
        <div className="mt-4 d-flex justify-content-center gap-4">

          <a
            href="https://github.com/GudikatiSumanthReddy"
            target="_blank"
            className="text-white fs-4"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/gudikati-sumanth-reddy-18a847234/"
            target="_blank"
            className="text-white fs-4"
          >
            <i className="bi bi-linkedin"></i>
          </a>

        </div>

      </div>
    </section>
  );
}