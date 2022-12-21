const SkillCard = ({ cardTitle, skills, delayAmt }) => {
    return (
        <ul className="list-group col-md-3 fadeInUpBig wow" data-wow-delay={delayAmt}>
            <li className="list-group-item" style={{ backgroundColor: "#c90000", color: "white" }}>{cardTitle}</li>
            {
                skills.map(skill => <li className="list-group-item">{skill}</li>)
            }
        </ul>
    )
}

const Skills = ({ skillMap, offset = 0 }) => {
    return (
        <>
            <div style={{ height: "2vh" }}></div>
            <div className="col-md-8 offset-md-3 col-xl-8 col-xs-12 row">
                {
                    Object.keys(skillMap).map((area, index) => (
                        <SkillCard cardTitle={area} skills={skillMap[area]} delayAmt={(index * 100 + offset * 100) + "ms"} />
                    ))
                }
            </div>
        </>
    )
}

export default Skills