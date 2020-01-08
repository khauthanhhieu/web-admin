import React from 'react';
import {
  Route, BrowserRouter as Router,
} from 'react-router-dom';
import {
  Login,
  Register,
  Dashboard,
  Footer,
} from './components';
import { PrivateRoute } from './components/helper';
import './App.css';
import Orders from './components/Orders';
import AccountList from './components/AccountList';
import SkillList from './components/SkillList';
import WeekReport from './components/WeekReport';
import ComplainList from './components/ComplainList';
import ContractList from './components/ContractPage';
import MonthReport from './components/MonthReport';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main-route-place">
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/orders" component={Orders} />
          <Route path="/complain-list" component={ComplainList} />
          <Route path="/account-list" component={AccountList} />
          <Route path="/week-report" component={WeekReport} />
          <Route path="/month-report" component={MonthReport} />
          <Route path="/skill-list" component={SkillList} />
          <Route path="/contract-list" component={ContractList} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
