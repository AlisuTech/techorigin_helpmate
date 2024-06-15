import React from 'react'
import './ServiceProviderProfile.css'
import logo from '../../../assets/person_2.jpeg'

const ServiceProviderProfile = () => {
  return (
    <>
        <div className='container border-red'>
            <div className='SP-details'>
                <div><img src={logo} className='SP-image'/></div>
                <div className='SP-name-position'>
                    <strong>Roger Scott</strong> <br></br>
                    <span className='relationship-expert'>Relationship Expert</span>
                </div>
            </div>

            <div className='body-container border-green'>
                <div className='SP-body'>
                    <span><b>Years of Experience: </b>3 years</span> <br></br>
                    <b>Accomplishments:</b>
                    <ul>
                        <li>I have helped over 20 clients move on from unproductive relationships</li>
                        <li>More than 50 of my clients have built better friendship bonds</li>
                        <li>More than 100 clients are from client referrals</li>
                        <li>I have helped more than 50 clients move from situationships to relationships</li>
                        <li>I have helped about 20 married clients discover ways to spice up their marriage</li>
                    </ul> <br></br>
                    <b>Qualifications:</b>
                    <ul>
                        <li>MA in Pyschology, University College Cork</li>
                        <li>BSc in Human Relations, University of Milan</li>
                        <li>Certified Counsellor, Google certs </li>
                    </ul> <br></br>
                    <b>Pricing:</b>
                    <ul>
                        <li>50$ per hour</li>
                        <li>240$ for 5 sessions per month</li>
                        <li>200$ for 5 sessions per month (RETURNING CLIENTS ONLY) </li>
                    </ul>
                </div>

                <div>
                    <p className="client-feedback-text">Client Feedback</p>
                    <div className="client-feedback">
                        <i className="fa fa-quote-left apostrophe_icon"></i> <br></br>
                        <div> <textarea name="" id="" cols="30" rows="10"></textarea></div>

                        <div className="client-feedback-bottom">
                            <div> <strong>My Name</strong> </div>
                            <div> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                    className="fa fa-star"></i><i className="fa fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default ServiceProviderProfile

/**
 * <div class="container">
        <div class="body-container">
            <div>
                <p class="client-feedback-text">Client Feedback</p>
                <div class="client-feedback">
                    <i class="fa fa-quote-left apostrophe_icon"></i> <br>
                    <div> <textarea name="" id="" cols="30" rows="10"></textarea></div>

                    <div class="client-feedback-bottom">
                        <div> <strong>My Name</strong> </div>
                        <div> <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                class="fa fa-star"></i><i class="fa fa-star"></i></div>
                    </div>
                </div>
            </div>

 * 
 */