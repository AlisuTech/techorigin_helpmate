import React from "react";
import "./Dashboard.css";
import customer1 from "../../../../assets/serviceProviderList/clientpicture/customerpictures/customer1.png";
import customer2 from "../../../../assets/serviceProviderList/clientpicture/customerpictures/customer2.png";
import customer3 from "../../../../assets/serviceProviderList/clientpicture/customerpictures/customer3.png";
import customer4 from "../../../../assets/serviceProviderList/clientpicture/customerpictures/customer4.png";
import customer5 from "../../../../assets/serviceProviderList/clientpicture/customerpictures/customer5.png";
import customer6 from "../../../../assets/serviceProviderList/clientpicture/customerpictures/customer6.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  //const now = 60;

  return (
    <>
      <div className="whole-flex">
        <div className="Arranged-grid">
          <div
            style={{
              display: "flex",
              height: "165vh",
              overflow: "scroll initial",
            }}
          >
            <CDBSidebar textColor="white" backgroundColor=" #3d52a0;">
              <CDBSidebarHeader
                prefix={<i className="fa fa-bars fa-large"></i>}
              >
                <a
                  href="/"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  Name
                </a>
              </CDBSidebarHeader>

              <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                  <NavLink exact to="/" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="columns">
                      Dashboard
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/tables" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="table">
                      Setting
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/ServiceProviderProfile" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">
                     Profile page 
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink
                    exact
                    to="/ServiceProviderProfile"
                    activeClassName="activeClicked"
                  >
                    <CDBSidebarMenuItem icon="chart-line">
                      Appointment
                    </CDBSidebarMenuItem>
                  </NavLink>

                  <NavLink
                    exact
                    to="/hero404"
                    target="_blank"
                    activeClassName="activeClicked"
                  >
                    <CDBSidebarMenuItem icon="exclamation-circle">
                      MORE INFO
                    </CDBSidebarMenuItem>
                  </NavLink>
                </CDBSidebarMenu>
              </CDBSidebarContent>

              <CDBSidebarFooter style={{ textAlign: "center" }}>
                <div
                  style={{
                    padding: "20px 5px",
                  }}
                >
                  <button>HOME</button>
                </div>
              </CDBSidebarFooter>
            </CDBSidebar>
          </div>
        </div>

        <div>
          <div className="progress-Bar">
            <div className="Revenue">Revenue: 44,000</div>
            <div className="signed-up">Assigned User: 44 </div>
            <div className="Open-Apointment">Open Appointment: 30 </div>
          </div>
          PROGRESS ON HELPMATE
          <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar striped variant="danger" now={40} key={3} />
          </ProgressBar>
        <div className="all-client">
        <div className="Clientele">
            <p className="clientwor">
              <CDBSidebarMenuItem icon="user">
              Clientele
              </CDBSidebarMenuItem></p>

            <div className="clientimageflex">
              <div className="imageflex">
                <img src={customer1} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>ONLINE</p>
                <p>OFFLINE</p>
                </div>
                
                <button className="button">SEND A MESSAGE</button>
              </div>

              <div className="imageflex">
                <img src={customer2} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>ONLINE</p>
                <p>OFFLINE</p>
                </div>
                <button className="button">SEND A MESSAGE</button>
              </div>

              <div className="imageflex">
                <img src={customer3} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>ONLINE</p>
                <p>OFFLINE</p>
                </div>
                
                <button className="button">SEND A MESSAGE</button>
              </div>

              <div className="imageflex">
                <img src={customer4} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>ONLINE</p>
                <p>OFFLINE</p>
                </div>
                <button className="button">SEND A MESSAGE</button>
              </div>

              <div className="imageflex">
                <img src={customer5} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>ONLINE</p>
                <p>OFFLINE</p>
                </div>
                <button className="button">SEND A MESSAGE</button>
              </div>

              <div className="imageflex">
                <img src={customer6} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>ONLINE</p>
                <p>OFFLINE</p>
                </div>
                
                <button className="button">SEND A MESSAGE</button>
              </div>
            </div>
          </div>

          
          
          <div className="Message">
            <p className="clientwor">
              
              <CDBSidebarMenuItem icon="message">
              Messages    
              </CDBSidebarMenuItem>
              </p>

            <div className="clientimageflex">
              <div className="imageflex">
                <img src={customer1} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>How are you today</p>
                
                </div>
                <ul>
                  <li>ONLINE</li>
                </ul>
              </div>

              <div className="imageflex">
                <img src={customer2} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>I have made all the call you</p>
                
                </div>
                <ul>
                  <li>ONLINE</li>
                </ul>
              </div>

              <div className="imageflex">
                <img src={customer3} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>Thank you</p>
                
                </div>
                
                <ul>
                  <li>ONLINE</li>
                </ul>
              </div>

              <div className="imageflex">
                <img src={customer4} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>its done Sir</p>
            
                </div>
                <ul>
                  <li>ONLINE</li>
                </ul>
              </div>

              <div className="imageflex">
                <img src={customer5} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>Sir, its been sent</p>
                
                </div>
                <ul>
                  <li>ONLINE</li>
                </ul>
              </div>

              <div className="imageflex">
                <img src={customer6} alt="" className="customerpics" />
                <div className="client-name">
                <p>ONYEKA EZOUGO </p>
                <p>okay</p>
                
                </div>
                
                <ul>
                  <li>ONLINE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>        
      </div>
    
    </>
  );
};

export default Dashboard;
