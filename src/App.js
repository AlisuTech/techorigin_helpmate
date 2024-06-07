import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './index.css'
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import HomePage from './pages/homepage/HomePage';
import NavigationBar from './components/navigationBar/NavigationBar'


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;