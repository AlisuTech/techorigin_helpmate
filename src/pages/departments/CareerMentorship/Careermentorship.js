import React from "react";
import "./CareerMentorship.css";
import logocoach from "../../../assets/mentorshipcareer/logocoach.png";
import academics from "../../../assets/mentorshipcareer/academics.png";
import disciplineremote from "../../../assets/mentorshipcareer/disciplineremote.png";
import investment from "../../../assets/mentorshipcareer/investment.png";
import relationship from "../../../assets/mentorshipcareer/relationship.png";
import business from "../../../assets/mentorshipcareer/business.png";
import Family from "../../../assets/mentorshipcareer/Family.png";
import excitement from "../../../assets/mentorshipcareer/excitement.png";
import wisdom from "../../../assets/mentorshipcareer/wisdom.png";
import courage from "../../../assets/mentorshipcareer/courage.png";
import councel from "../../../assets/mentorshipcareer/councel.png";

const CareerMentorship = () => {
  return (
    <div className="Resizer">
      <div className="main-container">
        {/* <img src={Coach} alt="" className="coachpics" /> */}
        <div className="text-inmain">
          <p className="first-phrase">Prefessional Life Coaching</p>
          <button>Get Started</button>
        </div>
      </div>

      <div className="special-offercontainer">
        <div className="special-oferr">
          <h1>Special Offer</h1>
        </div>
        <div>
          <h1>50% less of every purchase</h1>
          <p>Lorem ipsum door hddj jfjjf fjfjf jff</p>
        </div>

        <div>
          <h1>50% less of every purchase</h1>
          <p>Lorem ipsum door hddj jfjjf fjfjf jff</p>
        </div>
      </div>

      <div className="welcome-section">
        <div className="text">
          <p className="welcome">Welcome to LifeCoach</p>
          Harum quaerat nostrum voluptatibus aspernatur eligendi accusantium
          cum, impedit blanditiis voluptate commodi doloribus, nemo. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Odio necessitatibus
          deserunt itaque dignissimos adipisci, tenetur. Ipsum dolorum ab magnam
          facere alias ducimus nulla consequuntur blanditiis, maxime explicabo
          rerum maiores, odio. Image
        </div>
        <div className="image">
          <img src={logocoach} alt="" className="coachpic" />
        </div>
      </div>

      <div className="Main-Training-session">
        <p className="Our-training">Our Training</p>

        <div className="Training-session">
          <div className="first-secttion-flex">
            <div className="image-text">
              <div>
                {" "}
                <img src={academics} alt="" className="coachpics" />
              </div>
              <div>
                How to stay progressive in knowledge SOCIAL LIFE Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Pariatur dolores .
              </div>
            </div>

            <div className="image-text">
              <div>
                {" "}
                <img src={investment} alt="" className="coachpics" />
              </div>
              <div>
                How to stay progressive in knowledge SOCIAL LIFE Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Pariatur dolores .
              </div>
            </div>

            <div className="image-text">
              <div>
                {" "}
                <img src={business} alt="" className="coachpics" />
              </div>
              <div>
                How to stay progressive in knowledge SOCIAL LIFE Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Pariatur dolores .
              </div>
            </div>
          </div>

          <div className="second-section-flex">
            <div className="image-text">
              <div>
                {" "}
                <img src={Family} alt="" className="coachpics" />
              </div>
              <div className="text-margin">
                How to stay progressive in knowledge SOCIAL LIFE Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Pariatur dolores .
              </div>
            </div>

            <div className="image-text">
              <div>
                {" "}
                <img src={disciplineremote} alt="" className="coachpics" />
              </div>
              <div>
                How to stay progressive in knowledge SOCIAL LIFE Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Pariatur dolores .
              </div>
            </div>

            <div className="image-text">
              <div>
                {" "}
                <img src={relationship} alt="" className="coachpics" />
              </div>
              <div>
                How to stay progressive in knowledge SOCIAL LIFE Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Pariatur dolores .
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Team-section">
        <div className="writeup">
        <h1>Meet Team</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
        </div>

        <div className="flex-div">
          <div>
            <div>
              {" "}
              <img src={excitement} alt="" className="teampics" />
            </div>
            <h1>Jerry Otuwa</h1>
            <p>sit amet, consectetur adipisicing elit. Pariatur dolores</p>
          </div>

          <div>
            <div>
              {" "}
              <img src={wisdom} alt="" className="teampics" />
            </div>
            <h1>Jerry Otuwa</h1>
            <p>sit amet, consectetur adipisicing elit. Pariatur dolores</p>
          </div>

          <div>
            <div>
              {" "}
              <img src={courage} alt="" className="teampics" />
            </div>
            <h1>Jerry Otuwa</h1>
            <p>sit amet, consectetur adipisicing elit. Pariatur dolores</p>
          </div>

          <div>
            <div>
              {" "}
              <img src={councel} alt="" className="teampics" />
            </div>
            <h1>Jerry Otuwa</h1>
            <p>sit amet, consectetur adipisicing elit. Pariatur dolores</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerMentorship;
