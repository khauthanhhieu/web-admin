import React from 'react';
import { Login } from './components';
import {
  Route, BrowserRouter as Router,
} from 'react-router-dom';
import { PrivateRoute } from './components/helper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main-route-place">
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
