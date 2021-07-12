import React from "react"
import a from "../Images/16.png"
import b from "../Images/17.png"
import c from "../Images/18.png"
import d from "../Images/19.png"
import e from "../Images/20.png"
import f from "../Images/21.png"
import g from "../Images/22.png"
import h from "../Images/23.png"



const Whatyoulearn = () => {

    return (
        <div className="what">
            <section className="whatsec">
                <div> <h6>WHAT YOU LEARN</h6>
                <h1>at HiCoder is useful</h1>
                <h1>Technology, Management & more</h1></div>
               
            </section>
            <div className="divwhat">
            <section className="whatsec">
                <div className="whatdiv">
                    <img className="logo" src={a}></img>
                    <h6>Front End</h6>
                    <p>Students learn to design, develope the UI following UX with industry standards.</p>
                </div>
                <div className="whatdiv">
                    <img className="logo" src={b}></img>
                    <h6>Backend</h6>
                    <p>Students learn CS Architecture, CRUD, API, Authentication, Authorization, DB and etc.</p>
                </div>
                <div className="whatdiv">
                    <img className="logo" src={c}></img>
                    <h6>Project Management</h6>
                    <p>Students learn to plan, project, and execute development projects with client expectation.</p>
                </div>
                <div className="whatdiv">
                    <img className="logo" src={d}></img>
                    <h6>Production Deployment</h6>
                    <p>Students learn to create a server, deploy an application following security guidelines.</p>
                </div>
            </section>
            <section className="whatsec">
                <div className="whatdiv">
                    <img className="logo" src={e}></img>
                    <h6>Basic Analytics</h6>
                    <p>Students learn about analytics, usability, and integration of analytics in their production application.</p>
                </div>
                <div className="whatdiv">
                    <img className="logo" src={f}></img>
                    <h6>Soft Skills</h6>
                    <p>Soft skills encourages open communication & enhances corporate skills having corporate attitude.</p>
                </div>
                <div className="whatdiv">
                <img className="logo" src={g}></img>
                    <h6>Industry Standards</h6>
                    <p>Industry Trending technology, tools, and process adaption help students adapt to corporate with almost no effort.</p>
                </div>
                <div className="whatdiv">
                <img  className="logo" src={h}></img>
                    <h6>Max Pro Resume</h6>
                    <p>Students get a unique HiCoder smart ID, Certificate, and an industry expert-guided self developed integrated resume.</p>
                </div>
            </section>
            </div>
        </div>
    )

}

export default Whatyoulearn;