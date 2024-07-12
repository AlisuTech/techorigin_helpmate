import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import HomePage from "./pages/homepage/HomePage";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Footer from "./components/footer/Footer";
import Psychological from "./pages/departments/psychological/Psychological";
import Appointment from "./pages/appointment/Appointment";
import Medical from "./pages/departments/medical/Medical";
import ServiceProvider from "./pages/auth/signup/ServiceProvider";
import ServiceProviderProfile from "./pages/profile/serviceProvider/ServiceProviderProfile";
import ServiceProviderDashboard from "./pages/auth/serviceProvider/dashboard/Dashboard";
import ServiceProviderList from "./components/cards/serviceProvider/ServiceProviderList";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./pages/auth/serviceProvider/dashboard/Dashboard";
import CheckoutSuccess from "./components/payment/CheckoutSuccess";
import NotFound from "./pages/errors/NotFound";
import UserFlow from "./pages/auth/signup/UserFlow";
import Test from "./tests/Test";
import AppointmentRecords from "./pages/appointment_records/appointment_records";
import Career from "./pages/departments/career/Career";
import UsersProfile from "./pages/profile/userprofile/userprofile";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  const isUserLogged = useSelector((state) => state.user.isUserLogged);

  return (
    <Router>
      <NavigationBar />
      <div className="pt-[100px]">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/service_provider"
            element={<ServiceProviderDashboard />}
          />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/user-flow" element={<UserFlow />} />

          <Route
            path="/signup-service_provider"
            element={<ServiceProvider />}
          />

          <Route path="/medical" element={<Medical />} />

          <Route path="/checkout-success" element={<CheckoutSuccess />} />

          <Route path="/serv" element={<ServiceProviderList />} />

          <Route path="/career" element={<Career />} />

          <Route path="/psychological" element={<Psychological />} />


          <Route path="/appointment" element={<Appointment />} />

          
          <Route path="" element={<PrivateRoute />}>
            <Route path="/appointment" element={<Appointment />}/>
          </Route>
          
          <Route path="/test" element={<Test />} />

          <Route
            path="/appointment-records"
            element={<AppointmentRecords></AppointmentRecords>}
          ></Route>

          <Route path="/appointment-records" element={<AppointmentRecords></AppointmentRecords>}></Route>
          
          <Route
            path="/service_provider_profile"
            element={<ServiceProviderProfile />}
          />

          <Route
            path="/service_provider_profile"
            element={<ServiceProviderProfile />}
          />

          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/user-profile" element={<UsersProfile></UsersProfile>}></Route>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
