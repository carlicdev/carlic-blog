import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import BlogContextProvider from "./context/blog-context";

ReactDOM.render(
  <BlogContextProvider>
    <Router>
      <App />
    </Router>
  </BlogContextProvider>,
  document.getElementById('root')
);


