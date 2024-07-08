import React from "react";
import "./Medical.css";
import relation from "../../../assets/medicalPage/relations.png";
import family from "../../../assets/medicalPage/family.png";
import depression from "../../../assets/medicalPage/depression.png";
import doc_1 from "../../../assets/medicalPage/doc_1.png";
import doc_2 from "../../../assets/medicalPage/Doc_2.png";
import doc_3 from "../../../assets/medicalPage/Doc_3.png";
import { Col, Container, Row } from "react-bootstrap";

const Medical = () => {
  return (
    <div>
      <Container fluid className="medical-container-fluid image-fluid">
        <div className="backgroundImage1">
          <div className="backgroundImage1_writeup">
            <div>
              <div className="writeup_one">
                <p>A Safe Space</p>
                <p>for a</p>
                <p>Better Life </p>
              </div>
              <p class="writeup_two">
                <span>A problem shared is a problem</span> <br />
                <span>half solved</span>
              </p>
              <p>
                <button class="book-appointment">Book an Appointment</button>
              </p>
            </div>
          </div>
        </div>

        {/* <div class="div1">
        <table>
          <tr>
            <td>
              <div class="table_row1">
                <span class="div1_icons">
                  {" "}
                  <i class="fa fa-sticky-note"></i>
                </span>
                <div>
                  <span class="div1_bold">100% Confidential</span> <br></br>
                  <div class="div1_light">
                    <span>Discover the unseen potential of HelpMate,</span>
                    <br />
                    <span>where discretion meets innovation.</span>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="table_row2_3">
                <span class="div1_icons">
                  <i class="fa fa-users"></i>
                </span>
                <div>
                  <span class="div1_bold">Qualified Team</span>
                  <br></br>
                  <div class="div1_light">
                    <span>Experience exceptional treatment</span>
                    <span>
                      with our team of dedicated, quality doctors. Your health,
                    </span>
                    <span>our priority!</span>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="table_row2_3">
                <span class="div1_icons">
                  <i class="fa fa-umbrella"></i>
                </span>
                <div>
                  <span class="div1_bold">Book an Appointment</span>
                  <br></br>
                  <div class="div1_light">
                    <span>Go through the seamless process</span>
                    <span>
                      of booking an appointment with our user-friendly
                    </span>
                    <span>website.</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div> */}

        <div className="our-department-main-div">
          <div class="department">
            <p class="our-department">Our Departments</p>
            <span class="underline"></span>
            {/* <div class="line-through-div">
              <div className="line-through"></div>
            </div> */}
            <p class="department-writeup">
              Discover our world of diverse areas of specialty
            </p>
          </div>

          <Row>
            <Col sm={12} md={4} lg={4} xl={3}>
              <div className="department-column">
                <div>
                  <img src={relation} alt="" class="department-image" />
                </div>
                <div>
                  <p class="department-text1">General Clinic</p>
                  <p class="department-text2">
                    We emphasize preventive care to maintain your health and
                    provide convenient, accessible services with flexible hours.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={3}>
              <div className="department-column">
                <div>
                  <img src={family} alt="" class="department-image" />
                </div>
                <div>
                  <p class="department-text1">Mother and Child</p>
                  <p class="department-text2">
                    We focus on preventive care, health education, and
                    personalized support to promote the well-being of mothers
                    and their children.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={3}>
              <div className="department-column">
                <div>
                  <img src={depression} alt="" class="department-image" />
                </div>
                <div>
                  <p class="department-text1">Gynaecology</p>
                  <p class="department-text2">
                    We provide preventive care and personalized plans,
                    supporting women's health through every stage of life with
                    compassionate care.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <div class="bg-department"></div>

          <div class="department-text"></div>
        </div>

        <div className="expert-doctors">
          <div class="department">
            <p class="our-department">Expert Doctors</p>
            <span class="underline"></span>
          </div>

          <Row>
            <Col sm={12} md={4} lg={4} xl={3}>
              <div>
                <img src={doc_1} alt="" class="department-image" />
              </div>
              <div>
                <p class="department-text1">Dr. Chimuanya Oji</p>
                <p class="department-text2">Physician</p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={3}>
              <div>
                <img src={doc_2} alt="" class="department-image" />
              </div>
              <div>
                <p class="department-text1">Dr Steeze Hundred</p>
                <p class="department-text2">Pediatrician</p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={3}>
              <div>
                <img src={doc_3} alt="" class="department-image" />
              </div>
              <div>
                <p class="department-text1">Dr Composure Thanks</p>
                <p class="department-text2">Gynaecologist</p>
              </div>
            </Col>
          </Row>

          {/* <div>
          <div class="bg-department">
            <div>
              <img src={doc_2} alt="" class="department-image" />
            </div>
            <div>
              <img src={doc_3} alt="" class="department-image" />
            </div>
          </div>
        </div> */}

          <div class="bg-client image-fluid">
            <div class="client-text1 space-y-5">
              <span>
                <i class="fa fa-quote-left"></i> <br />I was able to finally
                open up to <br /> someone about some very sensitive <br />{" "}
                information about my body, and now <br /> I am getting all the
                help I need!
              </span>
              <div class="underline2"></div>
              <span class="client-text2">Adoa Adam</span>
            </div>
          </div>
        </div>

        {/* <div>
        <div class="bg-department">
          <div>
            <img src={relation} alt="" class="department-image" />
          </div>
          <div>
            <img src={family} alt="" class="department-image" />
          </div>
          <div>
            <img src={depression} alt="" class="department-image" />
          </div>
        </div>

        <div class="department-text">
          <div>
            <span class="department-text1">General Clinic</span> <br></br>
            <span class="department-text2">
              {" "}
              We emphasize preventive care to maintain your
              <br />
              health and provide convenient, accessible services with flexible
              hours.
            </span>
          </div>
          <div>
            <span class="department-text1">Mother and Child</span> <br></br>
            <span class="department-text2">
              We focus on preventive care, health education, and personalized
              support to promote the well-being of mothers and their children.
            </span>
          </div>
          <div>
            <span class="department-text1">Gynaecology</span> <br></br>
            <span class="department-text2">
              We provide preventive care and personalized plans, supporting
              women's health through every stage of life with compassionate
              care.
            </span>
          </div>
        </div>

        <div class="department">
          <span class="our-department">Expert Doctors</span> <br />
          <span class="underline"></span>
          <br />
        </div>
        <div>
          <div class="bg-department">
            <div>
              <img src={doc_1} alt="" class="department-image" />
            </div>
            <div>
              <img src={doc_2} alt="" class="department-image" />
            </div>
            <div>
              <img src={doc_3} alt="" class="department-image" />
            </div>
          </div>
        </div>

        <div class="doctor-text">
          <div>
            <span class="department-text1">Dr. Chimuanya Oji</span> <br></br>
            <span class="department-text2">Physician</span>
          </div>
          <div>
            <span class="department-text1">Dr Steeze Hundred</span> <br></br>
            <span class="department-text2">Pediatrician</span>
          </div>
          <div>
            <span class="department-text1">Dr Composure Thanks</span> <br></br>
            <span class="department-text2">Gynaecologist</span>
          </div>
          <br />
          <br />
          <br />
        </div>

        <div class="bg-client image-fluid">
          <div class="client-text1 space-y-5">
            <span>
              <i class="fa fa-quote-left"></i> <br />I was able to finally open
              up to <br /> someone about some very sensitive <br /> information
              about my body, and now <br /> I am getting all the help I need!
            </span>
            <div class="underline2"></div>
            <span class="client-text2">Adoa Adam</span>
          </div>
        </div>
      </div> */}
      </Container>
    </div>
  );
};

export default Medical;
