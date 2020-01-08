import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as action from '../actions/index';

const FormAccount = ({ addGridSkill }) => (
  <>
    <FormControl>
      <InputLabel htmlFor="my-input">Tên</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text"> We`ll never share your email.</FormHelperText>
    </FormControl>
    <br />
    <FormControl>
      <InputLabel htmlFor="my-input">Ngày sinh</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text"> </FormHelperText>
    </FormControl>
    <br />
    <FormControl>
      <InputLabel htmlFor="my-input">Địa chỉ</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text"> </FormHelperText>
    </FormControl>
    <br />
    <Fab size="medium" color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  </>
);
FormAccount.propTypes = {
  addGridSkill: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  onAddGrid: (skill) => {
    dispatch(action.addGridSkill(skill));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(FormAccount);
