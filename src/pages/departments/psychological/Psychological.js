import React from "react";
import "./Psychological.css";

import Photo12 from "../../../assets/psychological/Photo12.jpeg";
import Photo13 from "../../../assets/psychological/Photo13.jpeg";
import Photo14 from "../../../assets/psychological/Photo14.jpeg";
import Photo15 from "../../../assets/psychological/Photo15.jpeg";
import Photo16 from "../../../assets/psychological/Photo16.jpeg";

const Psychological = () => {
  return (
    <div>
      <div class="background">
        <div class=" font1 playfair-display-">
          <br />
          <br />
          <br />
          <br />
          PSYCHOLOGICAL CARE
          <br />
          <p class="fonts2 playfair-display- ">
            Helpmate: Doing Hard Things Can Build Character
          </p>
          <button class="button3">Get Started</button>
        </div>
      </div>
      <div class="display ">
          <img src={Photo12} alt="attention" class="imageclass2" />
          <div class="maxwidth">
            <br />
            <p class="fonts2 playfair-display- textdecor">
              {" "}
              “How should we live?”
            </p>
            <p class="fonts3 textcolor playfair-display-">
              <br />
              <br />
              That is the question The Deep Sphere tries to answer.
              <br />
              <br />
              &nbsp; &nbsp; To that aim, we enter the place of culture
              <br />
              <br /> &nbsp; &nbsp; and roam through its room: psychology,
              <br />
              <br /> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;philosophy,
              art,and science.
              <br />
              <br /> &nbsp;Helpmate hopes to contribute to your calm,growth,
              <br />
              <br />
              &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;healing, and
              self-understanding.
            </p>
            <br />
            <br />
            <br />
            <p class="fonts2 textcolor playfair-display-">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;We've got you covered!!!
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="Whatwedo  playfair-display- centralize">Our Programs</div>
        <br />
        <br />
        <br />
      <div class="grid2 textcolor playfair-display-">
          <div class="childgrid">
            <img src={Photo13} alt="attention" class="imageclass" />
            
            
            <br /><p class="fonts3">Pay attention to your problems</p>
            <span>
              <strong>
                Listening to all you've got to say with <br />
                rapt attention and without judgement
              </strong>
            </span>
            <br />
            <br />
            <br />
            <br />
            <button class="button4"></button>
          </div>
          <div class="childgrid">
            <img src={Photo14} alt="assesment" class="imageclass" />
            <p class="fonts3">Proper assesment and diagnosis</p>
            <br />
            <strong>
              Through Interviews, observation and
              <br />
              psychological tests, our professsionals can
              <br /> properly and accurately diagnose the issue
              <br /> at hand
            </strong>

            <br />
            <br />

            <button class="button4"></button>
          </div>
          <div class="childgrid">
            <img src={Photo15} alt="Therapy" class="imageclass" />
            <p class="fonts3">Therapy and Councelling</p>
            <strong>
              Providing councelling using evidence based
              <br /> techniques to help clients overcome emotional, <br />
              behavioural and psychological issues
            </strong>
            <br />
            <br />
            <br />
            <br />
            <button class="button4"></button>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div class="border-green flex justify-center">
          <img src={Photo16} alt="book" className="h-[20rem] w-[20rem]" />
        </div>
        <br />
        <br />
        <br />

        <div>
          <button class="buttons ">
            <strong> Click Here </strong>
          </button>
          <span class="fonts3 textcolor playfair-display-">
            {" "}
            To book an appointment with one of our Profesionals
          </span>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="lastbuttondiv">
          <button class="buttons2"> Home Page</button>
        </div>
    </div>
  );
};

export default Psychological;
