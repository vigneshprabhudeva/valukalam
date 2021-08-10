import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./HeroSection.css";
import logo1 from "./beer.png";
import logo2 from "./sick.png";
import logo3 from "./pizza.png";
import logo4 from "./svg-4.svg";

export default function HeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDec,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
}) {
    console.log(logo1);
    return (
        <>
            <div
                className={
                    lightBg ? "home__hero-section" : "home__hero-section darkbg"
                }
            >
                <div className="container">
                    <div
                        className="row home__hero-row"
                        style={{
                            display: "flex",
                            flexDirection:
                                imgStart === "start" ? "row-reverse" : "row",
                        }}
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1
                                    className={
                                        lightBg ? "heading" : "heading dark"
                                    }
                                >
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        lightTextDec
                                            ? "home__hero-subtitle"
                                            : "home__hero-subtitle dark"
                                    }
                                >
                                    {description}
                                </p>
                                <Link to="/sign-up">
                                    <Button
                                        buttonSize="btn--wide"
                                        buttonColor="blue"
                                    >
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img
                                    src={img}
                                    alt={alt}
                                    className="home__hero-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
