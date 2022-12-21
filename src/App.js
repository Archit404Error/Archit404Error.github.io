import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wowjs';
import { useEffect } from 'react';
import Project, { ProjRepr } from './project';
import Skills from './skills';
import Typewriter from 'typewriter-effect';

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
      "https://web-production-3b7b.up.railway.app",
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
      "In an effort to grow my machine learning knowledge, I built several reinforcement learning projects where the player plays (and eventually beats) a popular game. I've created simulations for flappy bird, brick breaker(pictured right), asteroids, car racing, and more!"
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

      {/*
        <div id="workExperience" className="row container">
          <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
            <h3 className="tiny fadeInUp wow">Putting my skills to the test.</h3>
            <h1 className="fadeInDown wow">Work Experience</h1>
          </div>
          <div style={{ height: "2vh" }}></div>
          <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
            <div className="row wow fadeInRight">
              <img alt="Archit Mehta Atyeti Software Development Intern" className="img-fluid col-md-3"
                src="images/atyeti_pic.png" style="max-height: 25vh;" />
              <div className="col-md-9">
                <h3>Software Development Intern</h3>
                <h3 className="tiny"><a className="tinyStyledLink" target="_blank" href="https://atyeti.com">Atyeti Inc</a> (Jul
                  2020 - Oct 2020)</h3>
                <h3 className="tiny" style="color: black;">At Atyeti, I implemented a centralized platform that helped the
                  company to greatly increase efficiency when it came to hiring and onboarding candidates.
                  The system enabled them to manage employee recruiting, send out acceptance/rejection emails, and ensure
                  that only HR staff had access to sensitive data. My platform helped the company save
                  hundreds of labor hours, and I worked directly with the company's CTO, who commended me for my work. Over
                  the duration of this internship, I learned about Microservices, Modern API Development
                  (with GraphQL and Apollo), and React.js.</h3>
              </div>
            </div>
          </div>
          <div style={{ height: "2vh" }}></div>
          <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
            <div className="row wow fadeInRight" data-wow-delay="100ms">
              <img alt="Archit Mehta Plainsboro Public Library Foundation Intern." className="img-fluid col-md-3"
                src="images/pplf_pic.png" style="max-height: 25vh;" />
              <div className="col-md-9">
                <h3>Web Development Intern</h3>
                <h3 className="tiny"><a className="tinyStyledLink" target="_blank"
                  href="https://plainsborolibrary.org/plainsboro-library-foundation-2/">Plainsboro Public Library
                  Foundation</a> (Jun 2019 - Sep 2019)</h3>
                <h3 className="tiny" style="color: black;">The Plainsboro Public Library is responsible for managing the
                  educational opportunities of over 50,000 Township residents, and primarily makes money via fundraisers.
                  As a web development intern at the foundation, I simplified their entire fundraising process, creating a
                  platform that they could use to automatically generate sites capable of advertising events,
                  receiving donations, etc. My platform served over 23,000 residents over the duration of my internship
                  alone, and my code was acquired for further use.</h3>
              </div>
            </div>
          </div>
          <div style={{ height: "2vh" }}></div>
          <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
            <div className="row wow fadeInRight" data-wow-delay="200ms">
              <img alt="Archit Mehta, Software Developer, Junior State of America." className="img-fluid col-md-3"
                src="images/jsa_pic.png" style="max-height: 25vh;" />
              <div className="col-md-9">
                <h3>Software Developer & Elected Official</h3>
                <h3 className="tiny"><a className="tinyStyledLink" target="_blank" href="https://jsa.org">Mid-Atlantic State Junior
                  State of America</a> (Apr 2020 - Apr 2021)</h3>
                <h3 className="tiny" style="color: black;">I was elected to lead over 1500 fellow highschoolers throughout the
                  Mid-Atlantic State(NJ, PA, NC, MD, VA, DE). My role was to perfect the Mid-Atlantic State by utilizing
                  technology and legislation to solve its issues. In my position, I not only created the aforementioned
                  State Assembly site, but also came up with reforms
                  (such as hosting meetings online) that brought legislation and engagement to their highest points in 30
                  years.</h3>
              </div>
            </div>
          </div>
          <div style={{ height: "2vh" }}></div>
          <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
            <div className="row wow fadeInRight" data-wow-delay="300ms">
              <img alt="Archit Mehta, Junior Coding League founder." className="img-fluid col-md-3" src="images/jcl_pic.png"
                style="max-height: 25vh;" />
              <div className="col-md-9">
                <h3>Founder & CEO</h3>
                <h3 className="tiny"><a className="tinyStyledLink" target="_blank" href="https://juniorcodingleague.org">Junior
                  Coding League</a> (Jul 2019 - Apr 2021)</h3>
                <h3 className="tiny" style="color: black;">In an attempt to teach students programming in a new and unique
                  manner, I founded Junior Coding League. The organization is built around the idea that students should
                  learn to code based off of projects they build, not just by memorizing syntax. In our classNamees, students
                  learn how to code by building games they've played their whole life (Flappy Bird, Cookie Clicker, etc.),
                  ensuring they have fun as they code and test their projects. Our idea proved wildly successful, and we
                  currently are a registered nonprofit, have 500+ students, and are expanding into India, Afghanistan, and
                  Nigeria!</h3>
              </div>
            </div>
          </div>
          <div style={{ height: "2vh" }}></div>
          <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
            <div className="row wow fadeInRight" data-wow-delay="400ms">
              <img alt="Archit Mehta, TSA President." className="img-fluid col-md-3" src="images/tsa_pic.png"
                style="max-height: 25vh;" />
              <div className="col-md-9">
                <h3>WW-P North Chapter President</h3>
                <h3 className="tiny"><a className="tinyStyledLink" target="_blank" href="https://tsaweb.org">Technology Student
                  Assocation</a> (2019 - 2021)</h3>
                <h3 className="tiny" style="color: black;">I've always gravitated to technology, and that's why I joined and
                  rose through the ranks of the WWP Technology Student Association chapter.
                  As President, I not only brought the club's membership to its highest point ever, but I also implemented a
                  website which students could use in order to grow their technological skills.
                  The website was inspired by the CTFs I competed in, and enabled students to submit answers to weekly
                  challenges, ensuring they would learn something new each week, even if they couldn't attend the club
                  meeting.</h3>
              </div>
            </div>
          </div>
          <div style={{ height: "2vh" }}></div>
          <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
            <div className="row wow fadeInRight" data-wow-delay="500ms">
              <img alt="Archit Mehta, USACO gold divisionist." className="img-fluid col-md-3" src="images/usaco_pic.png"
                style="max-height: 25vh;" />
              <div className="col-md-9">
                <h3>Gold Divisionist</h3>
                <h3 className="tiny"><a className="tinyStyledLink" target="_blank" href="https://usaco.org">USA Computing
                  Olympiad</a></h3>
                <h3 className="tiny" style="color: black;">The USA Computing Olympiad tests the programming abilities of
                  hundreds of thousands of students nationwide, and as a competitor I was able to grow my knowledge of
                  algorithms
                  and data structures. I rose all the way to the Gold rank, one of only 612 students nationwide to achieve
                  this prestigious rank.</h3>
              </div>
            </div>
          </div>
          <div style={{ height: "2vh" }}></div>
          <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
            <div className="row wow fadeInRight" data-wow-delay="600ms">
              <img alt="Archit Mehta, CTF Competitor and victor." className="img-fluid col-md-3" src="images/ctf_pic.png"
                style="max-height: 25vh;" />
              <div className="col-md-9">
                <h3>CyberSecurity CTF Competitor</h3>
                <h3 className="tiny" style="color: black;">In addition to Hackathons, I also compete in CyberSecurity CTF
                  competitions. I've learned a lot about vulnerabilities in websites (such as SQL Injections, XSS attacks,
                  and SSTI) as well as
                  binary exploitation (buffer overflow), cryptography (RSA encryption, hash collision, etc), and forensics
                  (file recovery, password cracking, etc). I've placed 5th in PeaCTF(out of 1600), 8th in AngstromCTF(out of
                  1500), and 37th
                  in PicoCTF (out of 10000)</h3>
              </div>
            </div>
          </div>
        </div>
                  */}

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
