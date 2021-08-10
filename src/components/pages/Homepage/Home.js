import React from "react";
import './home.css'

import Carousel from "./carousal";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import HeroSection from '../../HeroSection'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'

export default function Home() {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjThree}/>
            <HeroSection {...homeObjFour}/>
            <div className="carausal">
            <Carousel/>

            </div>
           
        </>
    )
}
