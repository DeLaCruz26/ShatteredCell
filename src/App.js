import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Repairs from './components/Repairs'
import Services from './components/Services'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/repairs' component={Repairs} />
          <Route path='/services' component={Services} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
