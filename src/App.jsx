import React from 'react';
import {
  Route, BrowserRouter as Router,
} from 'react-router-dom';
import { Login, Register } from './components';
import { PrivateRoute } from './components/helper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main-route-place">
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </div>
  );
}

export default App;
