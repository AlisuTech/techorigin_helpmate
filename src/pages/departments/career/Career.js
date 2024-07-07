import React from "react";
import "./Career.css";
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
import ControlledCarousel from '../../../components/carousel/ControlledCarousel';

const Career = () => {
  return (
    <div className="Resizer">
      <div className="main-container">
        
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
          <p className="welcome">Welcome to Help Mate </p>
          Welcome to Help Mate,Our career department is commited to your personal guide in achieving a balanced and fulfilling life. At Help Mate, 
          we understand that navigating life's challenges can be overwhelming, and we're here to help you find 
          clarity, purpose, and joy in every aspect of your journey.Our platform offers personalized coaching sessions,
          practical tools, and expert advice tailored to your unique needs and goals. Whether you're looking to improve your career, 
          relationships, health, or overall well-being, Help Mate provides the support and resources you need to thrive.
          Join us today and take the first step towards a brighter, more empowered future. With LifeCoach, you are never 
          alone on your path to success and happiness.
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

                <div><h1>How to stay progressive </h1> 
                <p>in knowledge and SOCIAL LIFE while attaining good grades through your academics</p>
                </div>
                   
            
                
            </div>

            <div className="image-text">
              
                <div>{" "}
                <img src={investment} alt="" className="coachpics" />
              </div>
                <div><h1>How to stay progressive </h1> 
                <p>in knowledge and SOCIAL LIFE while attaining good grades through your academics</p>
                </div>
               
            </div>

            <div className="image-text">
              
                <div>{" "}
                <img src={business} alt="" className="coachpics" /></div>
              
                <div><h1>How to stay progressive </h1> 
                <p>in knowledge and SOCIAL LIFE while attaining good grades through your academics</p>
                </div>
            </div>
          </div>

          <div className="second-section-flex" >
            <div className="image-text">
              
                <div>{" "}
                <img src={Family} alt="" className="coachpics" />
              </div>
                <div><h1>How to stay progressive </h1> 
                <p>in knowledge and SOCIAL LIFE while attaining good grades through your academics</p>
                </div>
            </div>

            <div className="image-text">
              
                <div>{" "}
                <img src={disciplineremote} alt="" className="coachpics" /></div>
              
                <div><h1>How to stay progressive </h1> 
                <p>in knowledge and SOCIAL LIFE while attaining good grades through your academics</p>
                </div>
            </div>

            <div className="image-text">
              
                <div>{" "}
                <img src={relationship} alt="" className="coachpics" />
               </div>
                <div><h1>How to stay progressive </h1> 
                <p>in knowledge and SOCIAL LIFE while attaining good grades through your academics</p>
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
      <div className="caousel-div">
        <ControlledCarousel></ControlledCarousel>
      </div>
    </div>
  );
};

export default Career;
