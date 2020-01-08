import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Depostis';
import Orders from './Orders';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
function createData(id, nameCart, nameSkill) {
  return {
    id,
    nameCart,
    nameSkill,
  };
}

function createData1(id, name, date, address) {
  return {
    id,
    name,
    date,
    address,
  };
}
function createData2(id, name, message) {
  return {
    id,
    name,
    message,
  };
}

function createData3(id, nameContract, nameCart) {
  return {
    id,
    nameContract,
    nameCart,
  };
}
function createData4(time, amount) {
  return { time, amount };
}

const dataWeek = [
  createData4('00:00', 0),
  createData4('03:00', 300),
  createData4('06:00', 600),
  createData4('09:00', 800),
  createData4('12:00', 1500),
  createData4('15:00', 2000),
  createData4('18:00', 2400),
  createData4('21:00', 2400),
  createData4('24:00', undefined),
];
const dataMonth = [
  {
    month: 'Tháng 1', value: 4000,
  },
  {
    month: 'Tháng 2', value: 3000,
  },
  {
    month: 'Tháng 3', value: 2000,
  },
  {
    month: 'Tháng 4', value: 2780,
  },
  {
    month: 'Tháng 5', value: 1890,
  },
  {
    month: 'Tháng 6', value: 2390,
  },
  {
    month: 'Tháng 7', value: 3490,
  },
  {
    month: 'Tháng 8', value: 2000,
  },
  {
    month: 'Tháng 9', value: 2780,
  },
  {
    month: 'Tháng 10', value: 1890,
  },
  {
    month: 'Tháng 11', value: 2390,
  },
  {
    month: 'Tháng 12', value: 3490,
  },
];
localStorage.setItem('dataMonth', JSON.stringify(dataMonth));
localStorage.setItem('dataWeek', JSON.stringify(dataWeek));
const rows = [
  createData(0, 'Lập trình', 'C/C++'),
  createData(1, 'Ngoại ngữ', 'Kỹ năng giao tiếp'),
  createData(2, 'Tự nhiên', 'Toán học'),
  createData(3, 'Xã hội', 'Địa lý học'),
  createData(4, 'Hội hoạ', 'Mỹ thuật'),
];
localStorage.setItem('rows', JSON.stringify(rows));
const contractList = [
  createData3(0, 'Dài hạn', 'Hợp đồng chính thức'),
  createData3(1, 'Ngắn hạn', 'Hợp đồng thời vụ'),
];
localStorage.setItem('contractList', JSON.stringify(contractList));
const accountList = [
  createData1(0, 'Nguyễn Quang Huy', '23/02/1997', 'Quận 7, HCM'),
  createData1(1, 'Nguyễn Thái Sơn', '18/02/1997', 'Quận 2, HCM'),
  createData1(2, 'Trần Dần', '23/02/1997', 'Quận 3, HCM'),
  createData1(3, 'Đặng Côn', '23/02/1997', 'Quận 5, HCM'),
  createData1(4, 'Long Tứ', '23/02/1997', 'Quận 9, HCM'),
];

localStorage.setItem('accountList', JSON.stringify(accountList));

const complainList = [
  createData2(0, 'Nguyễn Quang Huy', 'Khoá học tốt'),
  createData2(1, 'Nguyễn Thái Sơn', 'Chưa hiểu về khoá học'),
  createData2(2, 'Trần Dần', 'Nội dung quá dài dòng'),
  createData2(3, 'Đặng Côn', 'Nội dung không sát thực tế'),
  createData2(4, 'Long Tứ', 'Chưa hiểu được nội dung'),
];

localStorage.setItem('complainList', JSON.stringify(complainList));
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
