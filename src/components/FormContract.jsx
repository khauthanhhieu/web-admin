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

class FormContract extends React.Component {
  constructor() {
    super();
    this.state = {
      nameCart: '',
      nameContract: '',
    };
  }

  componentWillMount() {
    const { itemupdate } = this.props;
    if (itemupdate) {
      this.setState({
        nameCart: itemupdate.nameCart,
        nameContract: itemupdate.nameContract,
      });
    } else {
      this.setState({
        nameCart: '',
        nameContract: '',
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemupdate) {
      this.setState({
        nameCart: nextProps.itemupdate.nameCart,
        nameContract: nextProps.itemupdate.nameContract,
      });
    }
  }

  render() {
    const { nameCart, nameContract } = this.state;
    const { onAddGrid } = this.props;

    return (
      <>
        <FormControl>
          <InputLabel htmlFor="my-input">Ten hợp đồng</InputLabel>
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
          <InputLabel htmlFor="my-input">Loại hợp đồng</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            value={nameContract || ' '}
            onChange={(event) => {
              const { value } = event.target;
              this.setState({ nameContract: value });
            }}
          />
          <FormHelperText id="my-helper-text"> </FormHelperText>
        </FormControl>
        <br />
        <br />
        <Fab size="medium" color="primary" aria-label="add">
          <AddIcon onClick={(event) => {
            event.preventDefault();
            onAddGrid({ nameCart, nameContract });
          }}
          />
        </Fab>
      </>
    );
  }
}
FormContract.propTypes = {
  onAddGrid: PropTypes.func.isRequired,
  itemupdate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nameCart: PropTypes.string.isRequired,
    nameContract: PropTypes.string.isRequired,
  }).isRequired,
};
const mapStateToProps = (state) => ({
  rows: state.contract,
  itemupdate: state.itemupdate,
});

const mapDispatchToProps = (dispatch) => ({
  onAddGrid: (contract) => {
    dispatch(action.addGridContract(contract));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(FormContract);
