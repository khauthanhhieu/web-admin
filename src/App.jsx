import React from 'react';
import {
  Route, BrowserRouter as Router,
} from 'react-router-dom';
import { Login, Register, Dashboard, Footer } from './components';
import { PrivateRoute } from './components/helper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main-route-place">
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
