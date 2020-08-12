import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PostDetail from './components/Post/PostDetail';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="pr-0">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/posts/:slug' component={PostDetail} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/login' component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
