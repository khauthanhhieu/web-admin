import React from 'react';
import Header from './Header';
import Menu from './Menu';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header/>
        <Menu />
      </div>
    )
  }
}

export default Dashboard;
