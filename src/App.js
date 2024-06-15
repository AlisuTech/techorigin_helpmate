import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './index.css'
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import HomePage from './pages/homepage/HomePage';
import NavigationBar from './components/navigationBar/NavigationBar'
import Dashboard from './pages/auth/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import Psychological from './pages/departments/psychological/Psychological';
import Education from './pages/departments/education/Education';
import Appointment from './pages/appointment/Appointment';
import Medical from './pages/departments/medical/Medical';
import Choice from './pages/auth/Choice';
import ServiceProvider from './pages/auth/signup/ServiceProvider';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-service_provider" element={<ServiceProvider />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/education" element={<Education />} />
        <Route path="/psychological" element={<Psychological />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;