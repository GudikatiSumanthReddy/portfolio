/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import style from "./Hero.module.css";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Image from "next/image";


export default function Hero() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = ["Frontend Developer", "React.js", "Next.js", "Node.js"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (completed) return;

    if (index < roles.length) {
      if (charIndex < roles[index].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + roles[index][charIndex]);
          setCharIndex(charIndex + 1);
        }, 80);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setText((prev) => prev + (index < roles.length - 1 ? " | " : ""));
          setIndex(index + 1);
          setCharIndex(0);
        }, 500);

        return () => clearTimeout(timeout);
      }
    } else {
      setCompleted(true);
      setText(roles.join(" | "));
    }
  }, [charIndex, index, completed, roles]);


  useEffect(() => {
    import("bootstrap").then((bootstrap) => {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      [...tooltipTriggerList].forEach(
        (el) => new bootstrap.Tooltip(el)
      );
    });
  }, []);

  return (
    <section
      className="text-center text-white bg-black d-flex justify-content-center align-items-center mt-5"
      id="home"
    >
      <div>
        <Image
          src="/profile.jpeg"
          alt="profile"
          width={120}
          height={120}
          className="rounded-circle mb-4"
        />

        <h1 className="fw-bold">
          Hi, I&apos;m <span className="text-danger">Sumanth Reddy</span>
        </h1>
        <h3 className="mt-2">
          {text}
          {!completed && <span className={style.cursor}>|</span>}
        </h3>

        <p className={`mt-3 w-75 w-md-50 mx-auto ${style.text}`}>
          I build scalable and responsive web applications using React and
          Next.js. Passionate about creating intuitive user interfaces,
          integrating APIs, and delivering high-performance solutions.
        </p>

        <div className="mt-4">
          <a
            href="#contact"
            className="btn btn-light rounded-pill px-4 me-2 fs-5 fw-bold"
          >
            Get In Touch
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn btn-outline-light rounded-pill px-4 fs-5 fw-bold"
          >
            Download CV
          </a>
        </div>
        <div className="mt-5 text-center">
          <h1 className={style.experienceWith}>EXPERIENCE WITH</h1>

          <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
            <div
              className={style.skillBox}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="JavaScript"
            >
              <SiJavascript size={35} color="black" />
            </div>

            <div
              className={style.skillBox}
              data-bs-toggle="tooltip"
              title="React"
            >
              <FaReact size={35} color="#61DBFB" />
            </div>

            <div
              className={style.skillBox}
              data-bs-toggle="tooltip"
              title="Next.js"
            >
              <SiNextdotjs size={35} color="black" />
            </div>

            <div
              className={style.skillBox}
              data-bs-toggle="tooltip"
              title="Node.js"
            >
              <FaNodeJs size={35} color="#68A063" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
