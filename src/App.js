import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './index.css'
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import HomePage from './pages/homepage/HomePage';
import Header from './components/header/Header';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;