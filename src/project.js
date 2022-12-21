export class ProjRepr {
    constructor(imgAlt, imgSrc, projLink, title, desc, impact = "") {
        this.imgAlt = imgAlt;
        this.imgSrc = imgSrc;
        this.projLink = projLink;
        this.title = title;
        this.desc = desc;
        this.impact = impact;
    }
}

const Project = ({ imgAlt, imgSrc, projLink, title, desc, impact, dist }) => {
    return (
        <>
            <div style={{ height: `${dist}vh` }}></div>
            <div className="col-md-8 offset-md-3 col-xl-8 offset-xl-3 col-xs-12">
                <div className="row wow fadeInUp">
                    <img alt={imgAlt} src={imgSrc} />
                    <div className="col-md-12">
                        <h2>
                            <a className="styledLink" rel="noreferrer" target="_blank" href={projLink}>
                                {title}
                            </a>
                        </h2>
                        <h3 className="tiny" style={{ color: "black" }}>{desc}</h3>
                        {impact !== "" &&
                            <h3 className="tiny" style={{ color: "black" }}><b>Impact: {impact}</b></h3>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;