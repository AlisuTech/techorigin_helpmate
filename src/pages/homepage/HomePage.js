import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <>

      <div className='margin overall-div'>
        <div className='firsthomepagebg div-mainhome-opacity'>
          <h1 className='alignfirsthomepage h1font'>&nbsp;HELP MATE</h1>
          <div className='div2-firsthomepage'><h1 className='h3font'>Welcome!!!<br></br> to our safe <i class="fa fa-space-shuttle" aria-hidden="true"></i></h1></div>
          <div className='alignspan'>
            &nbsp;<span>&nbsp;Help mate believes in the power of compassion, personalized care to <br></br>
              help you acheive medical & emotional wellbeing and enjoy a healthy lifestyle.
            </span>
            <br></br>
            <p className='spanfont'>&nbsp;&nbsp;Our team of licensed health professionals, psychologist and therapist<br></br> are
              dedicated to providing high quality, evidence based services to individuals, couples and
              families
            </p>

            <button className='homepagebutton'>Our services</button>


          </div>

        </div>
        <div className='div-med med-imag'>
          <div className='alignpsycholgy'>
            <h1 className='h1font'>&nbsp;&nbsp;MEDICAL</h1>
            <div className='div-medical'>
              <h3 className='h3font'>We provide professional advice for all body systems</h3>
              <span className='spanfont'>Cardiovascular system</span>
              <br></br>
              <span className='spanfont'>Digestive system</span>
              <br></br>
              <span className='spanfont'>Immunology system</span>
              <br></br>
              <span className='spanfont'>Nervous system</span>
              <br></br>
              <span className='spanfont'>Reprodive system</span>
              <br></br>
              <span className='spanfont'>Respiratory system</span>
              <br></br>
              <span className='spanfont'>Skeletal system</span>
              <br></br>
              <span className='spanfont'>Sensory system</span>
              <br></br>
              <span className='spanfont'>Urinary system</span>
              <br></br>
              <br></br>
              <button className='medicalbutton'><p>Check our services</p></button>

            </div>

          </div>
        </div>
        <div className="div-psy psy-imag">
          <div className='alignpsychology'>
            <h1 className='h1font'>&nbsp;PSYCHOLOGY</h1>
            <div className='div-psychology'>
              <h3 className='h3font'>We care about your psychological health</h3>
              <span className='spanfont'>Mental health</span>
              <br></br>
              <span className='spanfont'>Sexual therapy</span>
              <br></br>
              <span className='spanfont'>Marriage and family counselling</span>
              <br></br>
              <br></br>
              <button className='psychologybutton'>Check Us Out</button>

            </div>
          </div>

        </div>
        <div className='finance-imag alignfinance'>
          <h1 className='h1font'>FINANCE</h1>
          <div className='divfinance2'>
            <h3 className='h3font'>We offer guides on how to make good financial decisions</h3>
            <button className='financebutton'>Click to see more</button>

          </div>
        </div>
        <div className='lifestyleflex'>
          <div className='lifestlyeflex'>
            <div className='fitness-imag lifestylediv'><p className='lifestylepadding h3font'><b>Stay fit</b></p></div>
            <div className='diet-imag lifestylediv'><p className='lifestylepadding h3font'><b>EAt Healthy</b></p></div>
            <div className='fashion-imag lifestylediv'><p className='lifestylepadding h3font'><b>Look Good</b></p></div>
            <div className='carrrr-imag lifestylediv'><p className='lifestylepadding h3font'><b>Work Hard</b></p></div>
            <div className='divfinance2'></div>
          </div>

        </div>
        <div className='notelifestyle'>f</div>

      </div>



    </>
  )
}

export default HomePage