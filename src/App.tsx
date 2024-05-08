import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/experiences" element={<ExperiencePage/>} />
          {/* <Route path="/contact" component={ContactPage} /> */}
          {/* <Route component={NotFoundPage} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
