import React from 'react'
import './ServiceProviderProfile.css'
import logo from '../../../assets/person_2.jpeg'

const ServiceProviderProfile = () => {
  return (
    <>
      <div className="container border-red">
        <div className="SP-details">
          <div>
            <img src={logo} alt='' className="SP-image" />
          </div>
          <div className="SP-name-position">
            <strong>Roger Scott</strong> <br></br>
            <span className="relationship-expert">Relationship Expert</span>
          </div>
        </div>

        <div className="body-container border-green">
          <div className="SP-body">
            <span>
              <b>Years of Experience: </b>3 years
            </span>{" "}
            <br></br>
            <b>Accomplishments:</b>
            <li>
              I have helped over 20 clients move on from unproductive
              relationships
            </li>
            <li>
              More than 50 of my clients have built better friendship bonds
            </li>
            <li>More than 100 clients are from client referrals</li>
            <li>
              I have helped more than 50 clients move from situationships to
              relationships
            </li>
            <li>
              I have helped about 20 married clients discover ways to spice up
              their marriage
            </li>
            <br></br>
            <b>Qualifications:</b>
            <li>MA in Pyschology, University College Cork</li>
            <li>BSc in Human Relations, University of Milan</li>
            <li>Certified Counsellor, Google certs </li>
            <br></br>
            <b>Pricing:</b>
            <li>50$ per hour</li>
            <li>240$ for 5 sessions per month</li>
            <li>200$ for 5 sessions per month (RETURNING CLIENTS ONLY) </li>
          </div>

          <div className="">
            <p className="client-feedback-text">Client Feedback</p>
            <div className="client-feedback overflow-auto h-300 border-none custom-scrollbar">
              <i className="fa fa-quote-left apostrophe_icon"></i>
              <div className="">
                <li>
                  I was struggling to connect with my partner, but after
                  sessions with Roger, we're communicating better than ever!
                  Their guidance was invaluable. 5 stars!" - Emily R.
                </li>
                <hr></hr>
                <br></br>
                <li>
                  Roger helped me work through some tough relationship issues.
                  Their insights and support gave me the confidence to navigate
                  challenging conversations. Highly recommend!" - David K.
                </li>
                <hr></hr>
                <br></br>
                <li>
                  I was skeptical at first, but Roger's relationship coaching
                  exceeded my expectations. They provided a safe space to
                  explore my feelings and offered practical advice. Thank you!"
                  - Rachel G.
                </li>
                <hr></hr>
                <br></br>
                <li>
                  I was struggling to cope with a recent breakup, but Roger's
                  support and guidance helped me process my emotions and move
                  forward. Their relationship talks are a game-changer!" -
                  Sophia L.
                </li>
              </div>
            </div>
            <br></br>
            <br></br>

            <div className="client-feedback-bottom">
              <div>
                <strong>Ratings</strong>{" "}
              </div>
              <div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceProviderProfile