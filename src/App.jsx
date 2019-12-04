import React from 'react';
import {
  Route, BrowserRouter as Router,
} from 'react-router-dom';
import { Login, Register, Dashboard } from './components';
import { PrivateRoute } from './components/helper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main-route-place">
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
