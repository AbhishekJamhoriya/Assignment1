import React from "react"
import image1 from "../Images/intern1.jpg"
import image2 from "../Images/intern2.jpg"
import image3 from "../Images/intern3.jpg"
import image4 from "../Images/inter4.jpg"
import i1 from "../Images/12.png"
import i2 from "../Images/13.png"
import i3 from "../Images/14.png"
import i4 from "../Images/15.png"
import { Button } from "reactstrap"

const SecondContainer = () => {

    return (
        <div className="secondbox">
          
            <div className="content ">
                <section className="secondimage">
                    <img src={image1}></img>
                </section>
                <section className="secondimage">
                    <h6>
                    HICODER
                    </h6>
                    <h1>
We help students learn
Full Stack Development.</h1>
                    <p>
                        HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.
                    </p>
                </section>
            </div>
            <div className="content reverse">
                <section className="secondimage">
                <img src={image2}></img>
                </section>
                <section className="secondimage">
                
                    <h1>Trained on the most in-demand Technology Skills</h1>
                    <p>
                    At the end of the course, every student becomes capable to develop their own create a web application, host on their own domain, enable advanced technologies and observe people's actions on their website and represent themselves as a HiCoder that matters.

                    </p>
                    <ul>
                        <li>End to End Project Analysis, Design & Development</li>
                        <li>Authentication, Geo Tracking, Payment Gateway</li>
                        <li>Analytics, SEO, Data Representation, Industry Standards</li>
                        <li>Max Pro Resume, Soft Skills, Client Expectation Management</li>
                    </ul>
                </section>
               
            </div>
            <div className="content reverse">
            <section className="secondimage">
                    <img src={image3}></img>
                </section>
                <section className="secondimage">
               
                    <h1>Why HiCoder?</h1>
                    <h6>
                    HiCoder enables students to think about real-world problems, design, and develop the right solution. <a href = "URL">know more </a>
                    </h6>
                </section>
            </div>
            <div className="project content">
                <section className="divlogo">
                    <img src={i2}  className="logo"></img>
                    <h2 style={{color:"white"}}>34 +</h2>
                    <p>PROJECTS COMPLETED</p>
                </section>
                <section className="divlogo">
                <img src={i1} className="logo"></img>
                    <h2 style={{color:"white"}}>47 +</h2>
                    <p>INDUSTRY EXPERTS</p>
                </section>
                <section className="divlogo">
                <img src={i3} className="logo"></img>
                    <h2 style={{color:"white"}}>30 +</h2>
                    <p>QUALITY DEVELOPERS</p>
                </section>
                <section className="divlogo">
                <img src={i4} className="logo"></img>
                    <h2 style={{color:"white"}}>40,000,00 +</h2>
                    <p>APPLICATION USERS</p>
                </section>
            </div>
            <div className="content ">
                <section className="secondimage">
                <img src={image4}></img>
                </section>
                <section className="secondimage">
                    <h1>
How does HiCoder help?</h1>
                    <h6>HiCoder resembeles software development and marketing altogether to develop applications that can be used by real user than keeping on Github.</h6>
                    <p>
                    HiCoder understands the struggle, peer pressure an engineering student goes into throughout curriculum. We believe, Most engineering students who can be part of the core software industry end up having a tech support or customer care job just because college never taught trending technology, project Management or encouraged students to their own projects.

                    </p>
                   <Button style={{backgroundColor:"#1c3988"}}>KNOW MORE</Button>
                </section>
            </div>

        </div>
    )

}



export default SecondContainer;