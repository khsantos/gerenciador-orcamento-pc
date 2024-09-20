import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PersistentDiv } from './components/PersistentDiv';
import { Home } from './components/Home';
import { About } from './components/About';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';

const App = () => {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <PersistentDiv />
      </div>
    </Router>

  );
}

export default App;