import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './index.css'
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import HomePage from './pages/homepage/HomePage';
import NavigationBar from './components/navigationBar/NavigationBar'
import Dashboard from './pages/auth/users/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import Psychological from './pages/departments/psychological/Psychological';
import Education from './pages/departments/education/Education';
import Appointment from './pages/appointment/Appointment';
import Medical from './pages/departments/medical/Medical';
import Choice from './pages/auth/Choice';
import ServiceProvider from './pages/auth/signup/ServiceProvider';
import ServiceProviderProfile from './pages/profile/serviceProvider/ServiceProviderProfile';
import ServiceProviderDashboard from './pages/auth/serviceProvider/dashboard/Dashboard';
import AppointmentHistory from './components/cards/user/appointmentHistory/AppointmentHistory';
import {useSelector } from "react-redux";


function App() {
  const { isSelected } = useSelector((state) => state.appointment);
  return (
    <Router>
      <NavigationBar />
      {isSelected && <Dashboard />}
      <Routes>
        {!isSelected && <Route path="/" element={<HomePage />} />}
        <Route path="/user" element={<Dashboard />} />
        <Route path="/service_provider" element={<ServiceProviderDashboard />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-service_provider" element={<ServiceProvider />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/education" element={<Education />} />
        <Route path="/psychological" element={<Psychological />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointment-history" element={<AppointmentHistory />} />
        <Route path="/service_provider_profile" element={<ServiceProviderProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;