import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navabar/Navbar';
import Home from './component/Home/Home';
import Footer from './layout/Footer/Footer';
import Copywrite from './layout/copywrite/copywrite';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
        <Copywrite />
      </Router>
    </div>
  );
}

export default App;
