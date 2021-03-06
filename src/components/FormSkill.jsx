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

class FormAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      nameCart: '',
      nameSkill: '',
    };
  }

  componentWillMount() {
    const { itemupdate } = this.props;
    if (itemupdate) {
      this.setState({
        nameCart: itemupdate.nameCart,
        nameSkill: itemupdate.nameSkill,
      });
    } else {
      this.setState({
        nameCart: '',
        nameSkill: '',
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemupdate) {
      this.setState({
        nameCart: nextProps.itemupdate.nameCart,
        nameSkill: nextProps.itemupdate.nameSkill,
      });
    }
  }

  render() {
    const { nameCart, nameSkill } = this.state;
    const { onAddGrid } = this.props;

    return (
      <>
        <FormControl>
          <InputLabel htmlFor="my-input">Loại kỹ năng</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            value={nameCart || ' '}
            onChange={(event) => {
              const { value } = event.target;
              this.setState({ nameCart: value });
            }}
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Tên Kỹ năng</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            value={nameSkill || ' '}
            onChange={(event) => {
              const { value } = event.target;
              this.setState({ nameSkill: value });
            }}
          />
          <FormHelperText id="my-helper-text"> </FormHelperText>
        </FormControl>
        <br />
        <br />
        <Fab size="medium" color="primary" aria-label="add">
          <AddIcon onClick={(event) => {
            event.preventDefault();
            onAddGrid({ nameCart, nameSkill });
          }}
          />
        </Fab>
      </>
    );
  }
}
FormAccount.propTypes = {
  onAddGrid: PropTypes.func.isRequired,
  itemupdate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nameCart: PropTypes.string.isRequired,
    nameSkill: PropTypes.string.isRequired,
  }).isRequired,
};
const mapStateToProps = (state) => ({
  rows: state.skill,
  itemupdate: state.itemupdate,
});

const mapDispatchToProps = (dispatch) => ({
  onAddGrid: (skill) => {
    dispatch(action.addGridSkill(skill));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(FormAccount);
