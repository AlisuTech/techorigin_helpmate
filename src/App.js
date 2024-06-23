import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './index.css'
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import HomePage from './pages/homepage/HomePage';
import NavigationBar from './components/navigationBar/NavigationBar'
import Dashboard from './pages/auth/users/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import Psychological from './pages/departments/psychological/Psychological';
import Appointment from './pages/appointment/Appointment';
import Medical from './pages/departments/medical/Medical';
import Choice from './pages/auth/Choice';
import ServiceProvider from './pages/auth/signup/ServiceProvider';
import ServiceProviderProfile from './pages/profile/serviceProvider/ServiceProviderProfile';
import ServiceProviderDashboard from './pages/auth/serviceProvider/dashboard/Dashboard';
import ViewProfile from './pages/auth/users/dashboard/profile_component/view_profile';
import EditProfil from './pages/auth/users/dashboard/profile_component/edit_profil';
import ChangePassword from './pages/auth/users/dashboard/profile_component/change_password';
// import CareerMentorship from './pages/departments/CareerMentorship/Careermentorship';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<Dashboard />} />
        <Route
          path="/service_provider"
          element={<ServiceProviderDashboard />}
        />
        <Route path="/choice" element={<Choice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-service_provider" element={<ServiceProvider />} />
        <Route path="/medical" element={<Medical />} />
        {/* <Route path="/careerMentorship" element={<CareerMentorship></CareerMentorship>}></Route> */}
        <Route path="/psychological" element={<Psychological />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/view-profile" element={<ViewProfile></ViewProfile>}></Route>
        <Route path="/edit-profile" element={<EditProfil></EditProfil>}></Route>
        <Route path="/change-password" element={<ChangePassword></ChangePassword>}></Route>
        <Route
          path="/service_provider_profile"
          element={<ServiceProviderProfile />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;