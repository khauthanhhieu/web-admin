import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Title from './Title';
import FormSkill from './FormSkill';
import MenuBar from './MenuBar';
import * as action from '../actions/index';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
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
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(3),
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
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const SkillList = ({ rows, onDeleteRow, onUpdateRow }) => {
  const classes = useStyles();
  const deleteIcon = (row) => (
    <IconButton>
      <DeleteIcon
        color="secondary"
        onClick={(event) => {
          event.preventDefault();
          onDeleteRow(row);
        }}
      />
    </IconButton>
  );

  const editIcon = (row) => (
    <IconButton>
      <EditIcon
        color="primary"
        onClick={(event) => {
          event.preventDefault();
          onUpdateRow(row);
        }}
      />
    </IconButton>
  );

  return (
    <div className={classes.root}>
      <MenuBar />
      <main className={classes.content}>
        <Title>Quản lí hệ thống kỹ năng</Title>
        <FormSkill />
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Loại kỹ năng</TableCell>
              <TableCell>Tên kỹ năng</TableCell>
              <TableCell>Sửa</TableCell>
              <TableCell>Xoá</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.nameCart}</TableCell>
                <TableCell>{row.nameSkill}</TableCell>
                <TableCell>{editIcon(row)}</TableCell>
                <TableCell>{deleteIcon(row.id)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
};
SkillList.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameCart: PropTypes.string.isRequired,
      nameSkill: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteRow: PropTypes.func.isRequired,
  onUpdateRow: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  rows: state.skill,
});
const mapDispatchToProps = (dispatch) => ({
  onDeleteRow: (row) => {
    dispatch(action.deleteRowSkill(row));
  },
  onUpdateRow: (row) => {
    dispatch(action.updateRowSkill(row));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SkillList);
