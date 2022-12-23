import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wowjs';
import { useEffect } from 'react';
import Project, { ProjRepr } from './project';
import Skills from './skills';
import Typewriter from 'typewriter-effect';
import WorkExperience from './workExperience';

const App = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, [])

  const sections = {
    "Home": "#intro",
    "Projects": "#projects",
    "Work Experience": "#workExperience",
    "Contact Me": "#contact",
    "Resume": `${process.env.PUBLIC_URL}/archit_resume.pdf`
  }

  const projects = [
    new ProjRepr(
      "Yolo, an app designed to help college students find events around campus and attend them with friends, created by Archit Mehta",
      `${process.env.PUBLIC_URL}/images/yolo_proj.png`,
      "https://yolonow.net",
      "Yolo: Social Events",
      "Yolo is the first social media app built around your calendar. It's designed to help you find fun events on campus and make friends with similar interests, and it's launching at Cornell University in Fall 2022!",
      "300+ Daily Active Users, 1000+ Users"
    ),
    new ProjRepr(
      "NewsFlash, a website and app designed to help identify and remove news bias, created by Archit Mehta",
      `${process.env.PUBLIC_URL}/images/news_flash_pic.png`,
      "http://34.150.144.93:5000",
      "NewsFlash: Unbiased News",
      "NewsFlash is a website and mobile app that helps identify and remove news bias. It is capable of displaying top headlines(and their bias), multiple articles across the web on a given topic, or analyzing a specific article by url. Through these features, the app is essentially able to provide users with unbiased coverage on every issue imaginable.",
      "1,000+ Users; 50,000+ Articles Analyzed"
    ),
    new ProjRepr(
      "PriceMerge, a service designed to provide the cheapest product prices across the web, created by Archit Mehta.",
      `${process.env.PUBLIC_URL}/images/price_merge_pic.png`,
      "https://github.com/Archit404Error/PriceMerge",
      "PriceMerge",
      "PriceMerge is a site built to simplify the e-commerge shopping process. Oftentimes, it can be hard to find the cheapest price of a given product, especially considering the thousands of e-commerce sites out there. PriceMerge solves this issue by comparing product prices across thousands of websites and automatically showing the cheapest price. It also provides price drop alerts.",
      "25,000+ Users; 200,000+ Searches; Featured on national news"
    ),
    new ProjRepr(
      "State Assembly website, designed to promote the creation legislation, created by Archit Mehta.",
      `${process.env.PUBLIC_URL}/images/state_assembly_pic.png`,
      "https://github.com/Archit404Error/StateAssemblySite",
      "State Assembly Website",
      "I built this website as I was leading over 1500+ students as the Elected MAS JSA Speaker of the State Assembly. Since JSA is a debate club, students can write legislation to create reform in the club, and my job was to oversee this legislation. That's why I built this platform, containing tools spanning from outreach to bill creation.",
      "1,500+ Daily Active Users across 6 US states; Brought legislation and engagement to all time highs"
    ),
    new ProjRepr(
      "MediVision, designed to help uninsured patients find cheap medication, created by Archit Mehta.",
      `${process.env.PUBLIC_URL}/images/medivision_pic.png`,
      "https://devpost.com/software/medivision?ref_content=user-portfolio&ref_feature=in_progress",
      "MediVision",
      "MediVision is designed to empower Americans without insurance, as, even when the price of one drug decreases, it can cost thousands of dollars to switch prescriptions. MediVision thus enables doctors to forecast drug prices using a linear regression SkLearn model, ensuring that the prescribed drug is the best for the patient in the long run.",
      "presented against Yale CBIT Hackathon against Doctorate Students; recieved mentorship from organizers after hackathon ended."
    ),
    new ProjRepr(
      "NEAT AI projects, created by Archit Mehta.",
      `${process.env.PUBLIC_URL}/images/reinforced_pic.png`,
      "https://github.com/Archit404Error/Artificial-Intelligence-Projects",
      "AI Simulations",
      "I built several reinforcement learning projects where the player plays (and eventually beats) a popular game. I've created simulations for flappy bird, brick breaker(pictured right), asteroids, car racing, and more!"
    )
  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light main-navigation" style={{ position: "fixed" }}>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a style={{ color: "white", fontSize: "3vh" }} className="nav-link" href="index.html">Archit Mehta</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {
              Object.keys(sections).map(section => (
                <li className="nav-item">
                  <a style={{ color: "white", fontWeight: "bold" }} className="nav-link" href={sections[section]}>{section}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>

      <div style={{ height: "20vh" }}></div>

      <div id="intro" className="row h-75">
        <div
          className="col-md-3 offset-md-1 col-sm-12 col-xs-12 justify-content-center text-center fadeInUpBig wow">
          <img alt="Archit Mehta, programmer, entrepreneur, and student." className="img-fluid" src={`${process.env.PUBLIC_URL}/images/archit_pic.png`}
            style={{ borderRadius: "50%" }} />
          <h1 style={{ fontSize: "7vh" }}><span className="highlight">Archit Mehta</span></h1>
          <div className="row justify-content-center" style={{ display: "inline-block" }}>
            <a className="col-md-1 col-sm-1 col-xs-1" rel="noreferrer" target="_blank" href="https://www.instagram.com/archit_mehta/?hl=en"><i
              className="fa fa-instagram socialIcon fa-2x"></i></a>
            <a className="col-md-1 col-sm-1 col-xs-1" rel="noreferrer" target="_blank"
              href="https://www.linkedin.com/in/archit-mehta-215437183/"><i
                className="fa fa-linkedin socialIcon fa-2x"></i></a>
            <a className="col-md-1 col-sm-1 col-xs-1" rel="noreferrer" target="_blank" href="https://www.github.com/Archit404Error"><i
              className="fa fa-github socialIcon fa-2x"></i></a>
          </div>

          <div style={{ height: "2vh" }}></div>

          <div className="row text-center">
            <h3 className="tiny">4architmehta@gmail.com</h3>
            <h3 className="tiny">(609) 277 5900</h3>
          </div>
        </div>
        <div className="col-md-8 d-none d-lg-block">
          <div style={{ height: "2vh" }}></div>
          <pre id="typewriter">
            <Typewriter
              options={{
                delay: 25,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('\t<span class = "comment-highlight">//About me!</span>')
                  .pauseFor(100)
                  .typeString('\n\t<span class = "var-highlight">var</span> Archit = {')
                  .pauseFor(100)
                  .typeString('\n\t    <span class = "comment-highlight">//Background</span>')
                  .pauseFor(100)
                  .typeString('\n\t    education: <span class = "string-highlight">\'Cornell University\'</span>,')
                  .pauseFor(100)
                  .typeString('\n\t    degree: <span class = "string-highlight">\'Computer Science\'</span>,')
                  .pauseFor(100)
                  .typeString('\n\t    aspirations: <span class = "string-highlight">\'Tech Entrepreneur\'</span>,')
                  .pauseFor(100)
                  .typeString('\n')
                  .pauseFor(100)
                  .typeString('\n\t    <span class = "comment-highlight">//Scroll to learn more!</span>')
                  .pauseFor(100)
                  .typeString('\n\t};')
                  .pauseFor(100)
                  .start();
              }}
            />
          </pre>
        </div>
      </div>

      <div style={{ height: "5vh" }}></div>

      <div id="description" className="row">
        <div className="col-md-9 offset-md-2">
          <h1 className="bounceInRight wow">Hi, I'm <span className="highlight">Archit</span>!</h1>
          <div style={{ height: "2vh" }}></div>
          <h3 className="fadeIn wow" data-wow-delay="700ms">I'm an <span className="highlight">avid
            programmer</span> and <span className="highlight">aspiring entrepreneur</span>,
            currently studying Computer Science at Cornell University.</h3>
          <div style={{ height: "2vh" }}></div>
          <h3 className="fadeIn wow" data-wow-delay="800ms">My goal is to create social good in the
            world by furthering the integration of technology into our society, a common theme throughout my work.</h3>
          <div style={{ height: "2vh" }}></div>
          <h3 className="fadeIn wow" data-wow-delay="900ms">To that end, I've built several
            projects designed to solve the problems I see in the world around me.
            The name of my most recent project is <span className="highlight">NewsFlash</span>, designed to provide users with
            all sides of an issue in under 5 minutes. It does so by displaying the summaries, sentiment, and bias of
            articles relevant to a particular issue.</h3>
          <div style={{ height: "2vh" }}></div>
          <h3 className="fadeIn wow" data-wow-delay="1000ms">I've also grown my <span
            className="highlight">leadership</span> and <span className="highlight">programming knowledge</span> via work
            experinces.
            Most recently, I interned at Johnson & Johnson Robotics, working on an ai-powered cloud iot platform for
            medical devices.</h3>
        </div>
      </div>
      <svg style={{ display: "block" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 321">
        <path fill="#ff3636" fillOpacity={1}
          d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,186.7C672,160,768,128,864,101.3C960,75,1056,53,1152,58.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
        </path>
      </svg>

      <div id="projects" className="row container">
        <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
          <h3 className="tiny fadeInUp wow">Engineering the Future.</h3>
          <h1 className="fadeInDown wow">Coding Projects</h1>
        </div>

        {
          projects.map((repr, index) => (
            <Project
              imgAlt={repr.imgAlt}
              imgSrc={repr.imgSrc}
              projLink={repr.projLink}
              title={repr.title}
              desc={repr.desc}
              impact={repr.impact}
              dist={index === 0 ? 5 : 10}
            />
          ))
        }
      </div>

      <div style={{ height: "5vh" }}></div>

      <div id="skills" className="row container">
        <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
          <h3 className="tiny fadeInUp wow">An Abundance of Experience.</h3>
          <h1 className="fadeInDown wow">Tech Experience & Skills</h1>
        </div>

        <Skills
          skillMap={{
            "Frontend": ["React.js", "React Native", "Angular.js", "Bootstrap"],
            "Backend": ["Node.js", "Express.js", "Flask", "Django"],
            "DBs & Query": ["MongoDB", "MySQL", "GraphQL", "SQLAlchemy"],
            "DevOps": ["Docker", "Kubernetes", "AWS & Azure", "Terraform"],
          }}
        />

        <Skills
          skillMap={{
            "Machine Learning": ["TensorFlow", "SKLearn", "PyTorch", "Keras"],
            "Mobile": ["React Native", "Flutter", "Firebase", "Jetpack Compose"],
            "Languages": ["Python", "Java", "JavaScript", "OCaml"],
          }}
          offset={4}
        />
      </div>

      <div style={{ height: "5vh" }}></div>

      <div id="workExperience" className="row container">
        <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
          <h3 className="subheader fadeInUp wow">Putting my skills to the test.</h3>
          <h1 className="fadeInDown wow">Work Experience</h1>
        </div>
        <WorkExperience />
      </div>

      <div style={{ height: "10vh" }}></div>

      <div id="contact" className="row container">
        <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
          <h3 className="tiny fadeInUp wow">Let's get in touch.</h3>
          <h1 className="fadeInDown wow">Contact Me</h1>
        </div>
        <div style={{ height: "2vh" }}></div>
        <iframe title="contact archit" className="col-md-8 offset-md-3 col-xl-8 col-xs-12 fadeInUp wow"
          data-wow-delay="300ms"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfOFrTh007K0i-srsRhvlHVpwhDCeSWkCI-qsixbemrpNB8sA/viewform?embedded=true"
          width="640" height="860" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </div >

      <div style={{ height: "5vh" }}></div>

      <footer className="col-md-12 text-center justify-content-center"
        style={{ color: "white", backgroundColor: "#c90000", height: "15vh" }}>
        <div style={{ height: "2vh" }}></div>
        <h3 className="tiny" style={{ color: "white" }}>Site built by Archit Mehta</h3>
        <div style={{ height: "2vh" }}></div>
        <a href="#intro" className="tiny" style={{ color: "white" }}>^ Back to top</a>
      </footer>
    </>
  );
}

export default App;
