import React from 'react'
import "./Psychological.css"
import photo_2 from '../../../assets/psychological/photo_2.jpeg'
import photo_3 from '../../../assets/psychological/photo_3.jpeg'
import photo_4 from '../../../assets/psychological/photo_4.jpeg'
import photo_5 from '../../../assets/psychological/photo_5.jpeg'
import photo_6 from '../../../assets/psychological/photo_6.jpeg'
import photo_7 from '../../../assets/psychological/photo_7.jpeg'


const Psychological = () => {
  return (
    <div>
      <div className="background border-green">
        <div class=" font1 playfair-display-">
          PSYCHOLOGICAL CARE
          <br></br>
          <br></br>
          <br></br>

          <p class="fonts2 playfair-display- textcolor">
            Helpmate: Doing Hard Things Can Build Character
          </p>
          <br></br>
          <br></br>

          <div class="fonts2 playfair-display-">
            The best years of your life are the ones in <br></br>
            <br></br>
            <br></br>
            which you decide your problems are your own. <br />
            <br></br>
            <br></br>
            You do not blame them on your mother, the ecology,
            <br></br>
            <br></br>
            <br /> or the president. You realize that you control your own
            destiny.
            <br></br>
            <br></br>
            <br /> — ALBERT ELLIS
            <br></br>
            <br></br>
            <br></br>

          </div>
          <button class="button3">Get Started</button>
        </div>
      </div>
      <div class="backgrounddiv border-blue">
        <div class="display ">
          <img
            src={photo_2}
            alt=''
            class="img1class"
          />
          <div class="maxwidth">
            <br />
            <p class="fonts2 playfair-display- "> “How should we live?”</p>
            <p class="fonts3 textcolor playfair-display-">
              <br />
              <br />
              That is the question The Deep Sphere
              <br />
              <br />
              tries to answer. To that aim,
              <br />
              <br />
              we enter the place of culture and roam
              <br />
              <br />
              through its room: psychology, philosophy,
              <br />
              <br />
              <br />
              art, and science. Helpmate hopes to contribute to your calm,
              <br />
              <br />
              growth, healing, and self-understanding.
            </p>
            <br />
            <br />
            <br />
            <p class="fonts3 textcolor playfair-display-">
              {" "}
              We've got you covered!!!
            </p>
          </div>
        </div>
        <br />
        <div class="Whatwedo font4 playfair-display-">Services We Offer</div>
        <br />
        <div class="grid textcolor playfair-display-">
          <div class="childgrid">
            <img
              src={photo_3}
              alt=''
              class="imageclass"
            />
            <p class="fonts3">Pay attention to your problems</p>
            <span>
              <strong>
                Listening to all you've got to say with <br />
                rapt attention and without judgement
              </strong>
            </span>
          </div>
          <div class="childgrid">
            <img
              src={photo_4}
              alt=''
              class="imageclass"
            />
            <p class="fonts3">Proper assesment and diagnosis</p>
            <span>
              <strong>
                Through Interviews, observation and
                <br />
                psychological tests, our professsionals can  <br />properly
                and accurately diagnose the issue  <br />at hand
              </strong>
            </span>
          </div>
          <div class="childgrid">
            <img
              src={photo_5}
              alt=''
              class="imageclass"
            />
            <p class="fonts3">Therapy and Councelling</p>
            <span>
              <strong>
                Providing councelling using evidence based
                <br /> techniques to help clients overcome emotional, <br />
                behavioural and psychological issues
              </strong>
            </span>
          </div>
          <div class="childgrid">
            <img
              src={photo_6}
              alt=''
              class="imageclass"
            />
            <p class="fonts3">Follow-Up and Supervision</p>
            <span>
              <strong>
                Supervising the client in order to
                <br />
                monitor their progress
              </strong>
            </span>
          </div>
          <div class="childgrid">
            <img
              src={photo_7}
              alt=''
              class="imageclass"
            />
            <p class="fonts3">Ethical and Legal Responsibilities</p>
            <span>
              <strong>
                {" "}
                Our Professionals are adequately trained <br />
                to ensure that everything
                <br />
                being discussed is kept safe and discreet.
                <br /> Additionally, our Clients can choose to be completely
                <br />
                anonymous
              </strong>
            </span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <button class="buttons ">
            <strong>
              {" "}
              Click Here
            </strong>
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
    </div>
  );
}

export default Psychological