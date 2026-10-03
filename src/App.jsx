import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import {
  Mail, Phone, Linkedin, Github, FileText, ExternalLink,
  Home as HomeIcon, UserRound, FolderKanban, BriefcaseBusiness,
  Menu, X
} from "lucide-react";

const LINKEDIN = "https://www.linkedin.com/in/nukala-sai-kamal";
const GITHUB = "https://github.com/"; // Replace with your GitHub URL
const EMAIL = "saikamalnukala@gmail.com";
const PHONE = "+91 9553263854";

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [
    ["/", "HOME"],
    ["/about", "ABOUT ME"],
    ["/projects", "PROJECTS"],
    ["/experience", "EXPERIENCE"]
  ];

  return (
    <header className="topbar">
      <div className="brand"><span>SK</span><small>PORTFOLIO</small></div>
      <button className="mobile-menu" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav open" : "nav"}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Nukala Sai Kamal</span>
      <span>Built with React + Vite</span>
    </footer>
  );
}

function SocialLinks() {
  return (
    <div className="socials">
      <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
      <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
    </div>
  );
}

function PhotoCard() {
  return (
    <div className="photo-area">
      <div className="photo-accent accent-a"></div>
      <div className="photo-accent accent-b"></div>
      <div className="photo-frame">
        <img
          className="profile-photo"
          src="/profile-photo.png"
          alt="Sai Kamal professional profile"
        />
      </div>
    </div>
  );
}
function ContactBlock() {
  return (
    <div className="contact-block">
      <a href={`mailto:${EMAIL}`}><Mail /> {EMAIL}</a>
      <a href={`tel:${PHONE.replace(/\s/g, "")}`}><Phone /> {PHONE}</a>
      <a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume-link">
        <FileText /> View <b>Resume</b> <ExternalLink size={17} />
      </a>
    </div>
  );
}

function Home() {
  return (
    <>
      <Header />
      <main className="page home-page">
        <div className="home-layout">
          <section className="intro">
            <div className="hello">Hello,</div>
            <h1>I am <span>Sai Kamal</span></h1>
            <p className="roles">
              Data Analytics &nbsp;|&nbsp; Machine Learning &nbsp;|&nbsp; Python &nbsp;|&nbsp; SQL &nbsp;|&nbsp; Power BI &nbsp;|&nbsp; NLP
            </p>
            <ContactBlock />
          </section>

          <section className="hero-photo">
            <PhotoCard />
            <SocialLinks />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

const certificates = [
  {
    issuer: "IT-ITeS Sector Skill Council / NCVET",
    title: "AI Data Quality Analyst — Internship Skill Competency Certificate",
    date: "June 11, 2025",
    image: "/certificates/ai-data-quality-analyst-internship.png",
    pdf: "/certificates/ai-data-quality-analyst-internship.pdf",
    type: "Internship",
    description: "Successfully cleared the assessment for the AI Data Quality Analyst job role after a 480-hour program at Rooman Technologies Pvt Ltd, Kurnool. The certificate records 16 credits at NCrF/NSQF Level 5 and was issued under the recognised IT-ITeS Sector Skill Council / NCVET framework."
  },
  {
    issuer: "Accenture / Forage",
    title: "Data Analytics and Visualization Job Simulation",
    date: "March 29, 2025",
    image: "/certificates/accenture-data-analytics.png",
    pdf: "/certificates/accenture-data-analytics.pdf",
    description: "Completed practical tasks in project understanding, data cleaning & modeling, data visualization & storytelling, and presenting to the client."
  },
  {
    issuer: "AWS Academy / EduSkills",
    title: "AI-ML Virtual Internship",
    date: "September – November 2023",
    image: "/certificates/aws-ai-ml.png",
    pdf: "/certificates/aws-ai-ml.pdf",
    description: "Successfully completed a 10-week AI-ML Virtual Internship supported by AWS Academy."
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Data Analytics Essentials",
    date: "March 29, 2025",
    image: "/certificates/cisco-data-analytics-essentials.png",
    pdf: "/certificates/cisco-data-analytics-essentials.pdf",
    description: "Successfully completed Data Analytics Essentials through the Cisco Networking Academy program."
  },
  {
    issuer: "Deloitte / Forage",
    title: "Data Analytics Job Simulation",
    date: "March 29, 2025",
    image: "/certificates/deloitte-data-analytics.png",
    pdf: "/certificates/deloitte-data-analytics.pdf",
    description: "Completed practical tasks in data analysis and forensic technology."
  },
  {
    issuer: "IBM / Cognitive Class",
    title: "Data Analysis with Python",
    date: "March 29, 2025",
    image: "/certificates/ibm-data-analysis-with-python.png",
    pdf: "/certificates/ibm-data-analysis-with-python.pdf",
    description: "Successfully completed and received a passing grade in Data Analysis with Python (DA0101EN)."
  }
];

const skills = {
  "Programming & Databases": ["Python", "SQL"],
  "Data Analysis": ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  "Analytics": ["EDA", "Data Cleaning", "Data Wrangling", "Feature Engineering", "Data Transformation", "ETL"],
  "Machine Learning & AI": ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "NLP", "Model Evaluation"],
  "Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn"],
  "BI & Visualization": ["Power BI", "Tableau", "Advanced Excel"],
  "Statistics": ["Correlation Analysis", "Confidence Intervals"]
};

function SideNav({ active, setActive }) {
  const items = [
    ["summary", "Summary"],
    ["skills", "Skills"],
    ["certifications", "Certifications"],
    ["achievements", "Achievements"],
    ["education", "Education"]
  ];
  return (
    <aside className="side-nav">
      {items.map(([key, label]) => (
        <button
          key={key}
          className={active === key ? "side-active" : ""}
          onClick={() => setActive(key)}
        >
          {label}
        </button>
      ))}
    </aside>
  );
}

function AboutContent({ active }) {
  if (active === "skills") return (
    <div className="content-card">
      <h2>Skills</h2>
      <div className="skills-list">
        {Object.entries(skills).map(([group, values]) => (
          <div className="skill-group" key={group}>
            <h3>{group}</h3>
            <div className="skill-tags">{values.map(v => <span key={v}>{v}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (active === "certifications") return <CertificateViewer />;

  if (active === "achievements") return (
    <div className="content-card">
      <h2>Achievements</h2>
      <ul className="bullet-list">
        <li>Built a real-time driver drowsiness detection project using CNN, TensorFlow and OpenCV.</li>
        <li>Developed a financial fraud detection system combining ML, NLP, Neo4j and Streamlit.</li>
        <li>Worked on AI data quality and dataset refinement during internship experience.</li>
      </ul>
    </div>
  );

  if (active === "education") return (
    <div className="content-card">
      <h2>Education</h2>
      <div className="education-card">
        <h3>B.Tech (CSE-AI)</h3>
        <p>G. Pullaiah College of Engineering and Technology, Kurnool</p>
        <strong>2021 — 2025 | CGPA: 8.67</strong>
      </div>
      <div className="education-card">
        <h3>Intermediate (MPC)</h3>
        <p>Smt. Theresa Junior College, Atmakur, Nandyal</p>
        <strong>2019 — 2021 | 93.6%</strong>
      </div>
      <div className="education-card">
        <h3>SSC</h3>
        <p>A.P. Model School, Pamulapadu, Nandyal</p>
        <strong>2019 | CGPA: 9.5</strong>
      </div>
    </div>
  );

  return (
    <div className="content-card">
      <h2>Hi, I'm Sai Kamal!</h2>
      <p>
        I work across data analysis and machine learning, with practical experience in
        data preparation, model development, visualization and NLP workflows. I enjoy
        transforming unstructured data into useful insights and intelligent models.
      </p>
      <p>
        My technical work includes Python, SQL, Power BI, TensorFlow, PyTorch,
        Scikit-learn and data analysis libraries such as Pandas and NumPy.
      </p>
      <h3 className="underlined">Professional Focus</h3>
      <ul className="bullet-list">
        <li>Data analysis, cleaning and transformation</li>
        <li>Machine learning and model evaluation</li>
        <li>NLP and deep learning workflows</li>
        <li>Business intelligence and visualization</li>
      </ul>
    </div>
  );
}

function CertificateViewer() {
  const [index, setIndex] = React.useState(0);
  const cert = certificates[index];

  const prev = () => setIndex((index - 1 + certificates.length) % certificates.length);
  const next = () => setIndex((index + 1) % certificates.length);

  return (
    <div className="content-card certificate-viewer">
      <div className="certificate-head">
        <div>
          <h2>Certifications</h2>
          <p className="certificate-count">{index + 1} / {certificates.length}</p>
        </div>
        <a className="certificate-open" href={cert.pdf} target="_blank" rel="noreferrer">
          Open PDF <ExternalLink size={16} />
        </a>
      </div>

      <div className="certificate-main">
        <div className="certificate-image-wrap">
          <img src={cert.image} alt={`${cert.issuer} - ${cert.title}`} />
        </div>
        <div className="certificate-info">
          <span className="certificate-issuer">{cert.issuer}</span>
          <h3>{cert.title}</h3>
          <p className="certificate-date">{cert.date}{cert.type ? ` • ${cert.type}` : ""}</p>
          <p>{cert.description}</p>
        </div>
      </div>

      <div className="certificate-controls">
        <button onClick={prev}>← Previous</button>
        <div className="certificate-dots">
          {certificates.map((_, i) => (
            <button
              key={i}
              aria-label={`Certificate ${i + 1}`}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button onClick={next}>Next →</button>
      </div>
    </div>
  );
}

function About() {
  const [active, setActive] = React.useState("summary");
  return (
    <>
      <Header />
      <main className="page internal-page">
        <div className="internal-layout">
          <SideNav active={active} setActive={setActive} />
          <div className="scroll-panel">
            <AboutContent active={active} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Projects() {
  return (
    <>
      <Header />
      <main className="page internal-page">
        <div className="projects-page">
          <div className="page-heading">
            <span>MY WORK</span>
            <h1>Projects</h1>
          </div>

          <div className="project-cards">
            <article className="project">
              <div className="project-index">01</div>
              <h2>Driver Drowsiness Detection</h2>
              <p>
                Developed a deep learning model using CNNs to detect driver
                drowsiness and trigger an alert system. OpenCV was used for
                real-time video processing and TensorFlow for model workflows.
              </p>
              <div className="project-tags">
                {["Python", "TensorFlow", "OpenCV", "CNN"].map(x => <span key={x}>{x}</span>)}
              </div>
              <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <ExternalLink size={16}/></a>
            </article>

            <article className="project">
              <div className="project-index">02</div>
              <h2>Financial Fraud Detection System</h2>
              <p>
                Built a financial fraud detection system using machine learning
                and NLP, with Neo4j graph relationships, LLaMA2 and a Streamlit
                dashboard for suspicious transaction patterns.
              </p>
              <div className="project-tags">
                {["Python", "Scikit-learn", "NLP", "Neo4j", "LLaMA2", "Streamlit"].map(x => <span key={x}>{x}</span>)}
              </div>
              <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <ExternalLink size={16}/></a>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Experience() {
  return (
    <>
      <Header />
      <main className="page internal-page experience-page-wrap">
        <div className="experience-page">
          <div className="page-heading experience-heading">
            <span>CAREER</span>
            <h1>Professional <em>Experience</em></h1>
          </div>

          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-time">
                <strong>AUG 2026 - PRESENT</strong>
                <span>Current Role</span>
              </div>
              <div className="timeline-node"><i></i></div>
              <article className="experience-card current">
                <div className="experience-card-top"></div>
                <h2>Associate Software Engineer</h2>
                <h3>TechnoMold IT Solutions Pvt. Ltd.</h3>
                <ul>
                  <li>Working as an Associate Software Engineer on software application development and integration.</li>
                  <li>Developing responsive web interfaces and connecting frontend applications with backend services and APIs.</li>
                  <li>Working with React, JavaScript, Python, FastAPI, SQL and database technologies across development projects.</li>
                </ul>
              </article>
            </div>

            <div className="experience-item">
              <div className="experience-time">
                <strong>FEB 2025 - JUNE 2025</strong>
                <span>Internship</span>
              </div>
              <div className="timeline-node"><i></i></div>
              <article className="experience-card">
                <div className="experience-card-top"></div>
                <h2>AI Data Quality Analyst Intern</h2>
                <h3>Rooman Technologies — PMKVY Internship</h3>
                <ul>
                  <li>Evaluated and refined datasets used for AI model training to improve data quality and consistency.</li>
                  <li>Worked with data annotation standards and quality checks to support reliable AI training data.</li>
                  <li>Gained practical exposure to AI data pipelines and data quality assurance practices.</li>
                </ul>
              </article>
            </div>
          </div>

          <div className="contact-box">
            <h2>Let's connect.</h2>
            <p>For opportunities, projects and collaboration.</p>
            <a href={`mailto:${EMAIL}`}><Mail /> {EMAIL}</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}