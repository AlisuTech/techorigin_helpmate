import React from "react";
import "./Psychological.css";

import Photo12 from "../../../assets/psychological/Photo12.jpeg";
import Photo13 from "../../../assets/psychological/Photo13.jpeg";
import Photo14 from "../../../assets/psychological/Photo14.jpeg";
import Photo15 from "../../../assets/psychological/Photo15.jpeg";
import Photo16 from "../../../assets/psychological/Photo16.jpeg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Psychological = () => {
  const isUserLogged = useSelector((state) => state.user.isUserLogged);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <div class="background">
        <div class=" font1 playfair-display- ps-9">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          PSYCHOLOGICAL CARE
          <br />
          <p class="fonts2 playfair-display- ">Helpmate: Doing Hard Things</p>
          <button class="button3 px-5 py-0">Get Started</button>
        </div>
      </div>
      <div class="display ">
        <img src={Photo12} alt="attention" class="imageclass2" />
        <div class="maxwidth">
          <br />
          <p class="fonts6 playfair-display- textdecor">
            {" "}
            “How should we live?”
          </p>
          <p class="fonts3 textcolor playfair-display-">
            <br />
            <br />
            That is the question The Deep Sphere tries to answer.
            <br />
            <br />
            To that aim, we enter the place of culture
            <br />
            <br /> and roam through its room: psychology,
            <br />
            <br />
            philosophy, art,and science.
            <br />
            <br /> &nbsp;Helpmate hopes to contribute to your calm,growth,
            <br />
            <br />
            healing, and self-understanding.
          </p>
          <br />
          <br />
          <br />
          <p class="fonts6 textcolor playfair-display-">
            {" "}
            We've got you covered!!!
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div class="Whatwedo  playfair-display- centralize ">
        <strong>Our Programs</strong>
      </div>
      <br />
      <br />
      <br />
      <Carousel
        responsive={responsive}
        infinite={true}
        className="skill-slider border-green mb-5"
      >
        <div className="item">
          <img src={Photo13} alt="skill-img" />
          <h5 className="text-center">Pay attention to your problems</h5>
          <p>Listening to all you've got to say with rapt attention and without judgement</p>
        </div>
        <div className="item mx-4">
          <img src={Photo14} alt="skill-img" />
          <h5 className="text-center">Proper assesment and diagnosis</h5>
          <p>Through Interviews, observation and psychological tests, our professsionals can properly and accurately diagnose the issue at hand</p>
        </div>
        <div className="item">
          <img src={Photo15} alt="skill-img" />
          <h5 className="text-center">Therapy and Councelling</h5>
          <p>Providing councelling using evidence based techniques to help clients overcome emotional, behavioural and psychological issues</p>
        </div>
      </Carousel>

      <div class="border-green flex justify-center">
        <img src={Photo16} alt="book" className="h-[20rem] w-[20rem]" />
      </div>
      <br />
      <br />
      <br />

      <div className="lastdiv">
        {/* <button class="buttons ">
            <strong> Click Here </strong>
          </button> */}
        <span class="fonts3 textcolor playfair-display-">
          {" "}
          To book an appointment with one of our Profesionals
        </span>
        <Link to={isUserLogged ? "/appointment" : "/login"}>
          <strong className=" hover:text-[--color-blue-800]">
            {" "}
            Click Here
          </strong>
        </Link>
      </div>
    </div>
  );
};

export default Psychological;
