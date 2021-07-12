import React from "react"
import image from "../Images/intern6.jpg"
import image1 from "../Images/intern7.jpg"

const Secoondlast = () => {

    return (
        <div>
            <section>
                <h6>NEWS</h6>
                <h1>#COVID19 Demands more full stack developers.</h1>
                <h1>& Industry Updates</h1>
            </section>
            <div>
                <container>
                    <section>
                        <img src={image}></img>
                    </section>
                    <section></section>
                </container>

                <container>
                    <section><img src={image1}></img></section>

                    <section></section>
                </container>

                <container>
                    <section><img src={image}></img></section>

                    <section></section>
                </container>
            </div>

        </div>
    )

}

export default Secoondlast;