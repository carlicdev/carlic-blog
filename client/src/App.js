import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PostList from './components/Post/PostList';
import PostDetail from './components/Post/PostDetail';
import AddFile from './components/Post/AddFile';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="pr-0">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/posts/:slug' component={PostDetail} />
      </Switch>
      <AddFile />
      <Footer />
    </div>
  );
}

export default App;
