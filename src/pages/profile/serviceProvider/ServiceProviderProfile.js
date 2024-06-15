import React from 'react'

const ServiceProviderProfile = () => {
  return (
    <>
         <div class="container">
        <div class="SP-details">
            <div><img src="person_2.jpeg" class="SP-image"></div>
            <div class="SP-name-position"> <strong>Roger Scott</strong> <br> <span
                    class="relationship-expert">Relationship
                    Expert
                </span></div>
        </div>
        <div class="body-container">
            <div class="SP-body">
                <span><b>Years of Experience: </b>3 years</span> <br>
                <b>Accomplishments:</b>
                <ul>
                    <li>I have helped over 20 clients move on from unproductive relationships</li>
                    <li>More than 50 of my clients have built better friendship bonds</li>
                    <li>More than 100 clients are from client referrals</li>
                    <li>I have helped more than 50 clients move from situationships to relationships</li>
                    <li>I have helped about 20 married clients discover ways to spice up their marriage</li>
                </ul> <br>
                <b>Qualifications:</b>
                <ul>
                    <li>MA in Pyschology, University College Cork</li>
                    <li>BSc in Human Relations, University of Milan</li>
                    <li>Certified Counsellor, Google certs </li>
                </ul> <br>
                <b>Pricing:</b>
                <ul>
                    <li>50$ per hour</li>
                    <li>240$ for 5 sessions per month</li>
                    <li>200$ for 5 sessions per month (RETURNING CLIENTS ONLY) </li>
                </ul>


            </div>
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

    
    </>
    )
}

export default ServiceProviderProfile