import React from 'react';
import {
  Route, BrowserRouter as Router,
} from 'react-router-dom';
import { Login, Register, Dashboard } from './components';
import { PrivateRoute } from './components/helper';
import './App.css';

function App() {
  return (
    <div className="App fill-window">
      <Router className="fill-window">
        <div className="main-route-place">
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </div>
  );
}

export default App;
