const WorkCard = ({ role, org, orgUrl, img, startDate, endDate, desc }) => {
    return (
        <>
            <div style={{ height: "5vh" }}></div>
            <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12">
                <div className="row wow fadeInRight">
                    <img alt={`Archit Mehta ${role} ${org}`} className="img-fluid col-md-3"
                        src={img} style={{ maxHeight: "25vh" }} />
                    <div className="col-md-9">
                        <h3>{role}</h3>
                        <h3 className="tiny">
                            <a className="tinyStyledLink" rel="noreferrer" target="_blank" href={orgUrl}>{org}</a> ({startDate} - {endDate})
                        </h3>
                        <h3 className="tiny" style={{ color: "black" }}>{desc}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

const WorkExperience = () => {
    return (
        <>
            <WorkCard
                role="Head of Product"
                org="Cornell Appdev"
                orgUrl="https://cornellappdev.com/"
                img={`${process.env.PUBLIC_URL}/images/appdev.png`}
                startDate="Feb 2022"
                endDate="Present"
                desc="Leading all software development and product ideation on apps used by 15,000+ Cornell Students. Prior to becoming product lead, I was the tech lead of Volume, a centralized publication app for Cornell students. Prior to that I was a backend developer on Eatery, which provides dining hall menu information to students."
            />
            <WorkCard
                role="Software & Cloud Engineering Intern"
                org="Johnson & Johnson Robotics"
                orgUrl="https://www.jnj.com/healthcare-products/medtech"
                img={`${process.env.PUBLIC_URL}/images/jnj.jpeg`}
                startDate="May 2022"
                endDate="Aug 2022"
                desc="Worked on a cloud platform to centralize and automate the management of robotic surgery devices. Created several terraform IaC modules, deployed a data extraction service for hospital contracts, and utilized Azure IoT Edge to create a cloud-based device authentication system capable of being used in the operating room."
            />
            <WorkCard
                role="Software Development Intern"
                org="Atyeti Inc"
                orgUrl="https://atyeti.com/"
                img={`${process.env.PUBLIC_URL}/images/atyeti_pic.png`}
                startDate="Jul 2020"
                endDate="Oct 2020"
                desc="At Atyeti, I implemented a centralized platform that helped the company to greatly increase efficiency when it came to hiring and onboarding candidates. The system enabled them to manage employee recruiting, send out acceptance/rejection emails, and ensure that only HR staff had access to sensitive data. My platform helped the company save hundreds of labor hours, and I worked directly with the company's CTO, who commended me for my work. Over the duration of this internship, I learned about Microservices, Modern API Development (with GraphQL and Apollo), and React.js."
            />
            <WorkCard
                role="Web Development Intern"
                org="Plainsboro Public Library Foundation"
                orgUrl="https://plainsborolibrary.org/plainsboro-library-foundation-2/"
                img={`${process.env.PUBLIC_URL}/images/pplf_pic.png`}
                startDate="Jun 2019"
                endDate="Sep 2019"
                desc="The Plainsboro Public Library is responsible for managing the educational opportunities of over 50,000 Township residents, and primarily makes money via fundraisers. As a web development intern at the foundation, I simplified their entire fundraising process, creating a platform that they could use to automatically generate sites capable of advertising events, receiving donations, etc. My platform served over 23,000 residents over the duration of my internship alone, and my code was acquired for further use."
            />
        </>
    )
}

export default WorkExperience;