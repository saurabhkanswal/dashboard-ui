// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Post from './pages/Post'
import User from './pages/User'
import Sidepannel from './component/Sidepannel'

function App() {
  return (
    <>
    <Router>
    <Sidepannel/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/post' component={Post}/>
      <Route path='/user' component={User}/>
    </Switch>
    </Router>
    </>
    );
}

export default App;
