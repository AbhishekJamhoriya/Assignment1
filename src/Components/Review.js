import React from "react";
import { Jumbotron, Carousel } from "reactstrap";
import image from "../Images/intern5.jpg"
import Slideshow from "./Caroursel";

const Review = () => {
    return (
        <div >
           
            <div className="Text-Center">
                <h6>THOUGHTS ON HICODER SYLLABUS</h6>
                <h1>Reviews by Industry Experts</h1>
            </div>
            <div className="secondjum">
                <div className="imgbox">
                    <img className="secondimage" src={image}></img>
                   
                </div>
                <Slideshow />
            </div>
           
        </div>
    )
}

export default Review;