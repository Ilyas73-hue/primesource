import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navabar/Navbar';
import Home from './component/Home/Home';
import Footer from './layout/Footer/Footer';
import Copywrite from './layout/copywrite/copywrite';
import About from './component/About/About';
import Services from './component/Services/Services';
import Contact from './component/Contact_us/Contact';
import Carrer from './component/Career/Career';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/service" exact component={Services} />
          <Route path="/contact_us" exact component={Contact} />
          <Route path="/career" exact component={Carrer} />
          </Switch>
        <Footer />
        <Copywrite />
      </Router>
    </div>
  );
}

export default App;
