import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ContactsIcon from '@material-ui/icons/Contacts';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Trang chủ" />
    </ListItem>
    <ListItem button component="a" href="/account-list">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Quản lí người dùng" />
    </ListItem>
    <ListItem button component="a" href="/skill-list">
      <ListItemIcon>
        <FitnessCenterIcon />
      </ListItemIcon>
      <ListItemText primary="Quản lí kỹ năng" />
    </ListItem>
    <ListItem button component="a" href="/contract-list">
      <ListItemIcon>
        <ContactsIcon />
      </ListItemIcon>
      <ListItemText primary="Quản lí hợp đồng" />
    </ListItem>
    <ListItem button component="a" href="/complain-list">
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>
      <ListItemText primary="Quản lí khiếu nại" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Thống kê</ListSubheader>
    <ListItem button component="a" href="/week-report">
      <ListItemIcon>
        <EqualizerIcon />
      </ListItemIcon>
      <ListItemText primary="Theo tuần" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Theo tháng" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Theo năm" />
    </ListItem>
  </div>
);
