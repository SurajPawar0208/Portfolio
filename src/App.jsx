import React from "react";

const data = {
  name: "Suraj Pawar",
  role: "Full Stack Developer",
  tagline: "Strong proficiency in JavaScript, React, HTML/CSS, and backend tools like Node.js or SQL enables effective full stack development. Problem-solving under deadlines, Agile methodologies, and quick learning of new technologies are essential. Familiarity with Git, APIs, and frameworks like Tailwind CSS supports collaborative projects.",
  about:
    "Strong proficiency in JavaScript, React, HTML/CSS, and backend tools like Node.js or SQL enables effective full stack development. Problem-solving under deadlines, Agile methodologies, and quick learning of new technologies are essential. Familiarity with Git, APIs, and frameworks like Tailwind CSS supports collaborative projects.",
  location: "Pune, India",
  email: "sp97637261@gmail.com",
  github: "https://github.com/SurajPawar0208",
  linkedin: "https://www.linkedin.com/in/surajjjj/",
  skills: [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL / Oracle",
    "HTML5 & CSS3",
    "Tailwind / Bootstrap",
    "Git & GitHub",
  ],
  projects: [
    {
      title: "Ecommerce Store",
      tech: "React, Node.js, MongoDB",
      description:
        "Full‑stack ecommerce web app with product listing, cart, and checkout flow.",
      link: "https://github.com/SurajPawar0208/genzmode-shop-flow",
    },
    {
      title: "Netflix Clone",
      tech: "React JS",
      description:
        "Responsive Netflix‑style UI with movie categories, hover effects, and trailer modal.",
      link: "https://github.com/SurajPawar0208/NetFlix-Clone",
    },
    {
      title: "Task Manager App",
      tech: "JavaScript, Node.js",
      description:
        "Task management app with user authentication, task CRUD operations, and deadlines.",
      link: "https://github.com/SurajPawar0208/LinkCode/tree/main/Project/Task%20Manager",
    },
  ],
};

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">{data.name}</div>
      <nav className="nav-right">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <h1>
          SURAJ PAWAR
        </h1>
        <h2>{data.role}</h2>
        <p className="hero-tagline">{data.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-avatar">
        <div className="avatar-circle">
          <span>{data.name[0]}</span>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      <p>{data.about}</p>
      <p>
        Based in <strong>{data.location}</strong>. Loves working on ecommerce,
        entertainment, and dashboard style apps.
      </p>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="skills-grid">
        {data.skills.map((skill) => (
          <li key={skill} className="skill-pill">
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="cards-grid">
        {data.projects.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p className="card-tech">{p.tech}</p>
            <p>{p.description}</p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="card-link"
              >
                View Code →
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}


function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p>
        Interested in working together or have an opportunity to discuss? Reach
        out anytime.
      </p>
      <div className="contact-links">
        <a href={`data.email`} className="btn btn-primary">
          Email Me
        </a>
        <a href={data.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={data.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
      <h1>{data.name}.</h1>
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
