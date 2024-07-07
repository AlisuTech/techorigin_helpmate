import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import HomePage from "./pages/homepage/HomePage";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Dashboard from "./pages/auth/users/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Psychological from "./pages/departments/psychological/Psychological";
import Appointment from "./pages/appointment/Appointment";
import Medical from "./pages/departments/medical/Medical";
import Choice from "./pages/auth/Choice";
import ServiceProvider from "./pages/auth/signup/ServiceProvider";
import ServiceProviderProfile from "./pages/profile/serviceProvider/ServiceProviderProfile";
import ServiceProviderDashboard from "./pages/auth/serviceProvider/dashboard/Dashboard";
import ViewProfile from "./pages/auth/users/dashboard/profile_component/view_profile";
import EditProfil from "./pages/auth/users/dashboard/profile_component/edit_profil";
import ChangePassword from "./pages/auth/users/dashboard/profile_component/change_password";
import ServiceProviderList from "./components/cards/serviceProvider/ServiceProviderList";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/auth/users/dashboard_components/header";
import UserDashboard from "./pages/auth/users/dashboard/userDashboard";
import DashBoard from "./pages/auth/serviceProvider/dashboard/Dashboard";
import CheckoutSuccess from "./components/payment/CheckoutSuccess";
import NotFound from "./pages/errors/NotFound";
<<<<<<< HEAD
import Careermentorship from "./pages/departments/CareerMentorship/Careermentorship";
=======
import CareerMentorship from "./pages/departments/careerMentorship/CareerMentorship";
import UserFlow from "./pages/auth/signup/UserFlow";
import Test from "./tests/Test";
>>>>>>> e84c94b4a9d8d767bc8cd96f23396f96994c256f

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="pt-[100px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/user-dashboard' element={<UserDashboard></UserDashboard>}></Route>
          <Route
            path="/service_provider"
            element={<ServiceProviderDashboard />}
          />
          <Route path="/choice" element={<Choice />} />
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
          <Route path="/Careermentorship" element={<Careermentorship />} />
          <Route path="/psychological" element={<Psychological />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/test" element={<Test />} />
          <Route
            path="/view-profile"
            element={<ViewProfile></ViewProfile>}
          ></Route>
          <Route
            path="/edit-profile"
            element={<EditProfil></EditProfil>}
          ></Route>
          <Route
            path="/userss-dashboard"
            element={<Header></Header>}
          ></Route>
          <Route
            path="/change-password"
            element={<ChangePassword></ChangePassword>}
          ></Route>
          <Route
            path="/service_provider_profile"
            element={<ServiceProviderProfile />}
          />

          <Route
            path="/service_provider_profile"
            element={<ServiceProviderProfile />}
          />

          <Route
            path="/dashboard"
            element={<DashBoard />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
