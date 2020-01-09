/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Button, Form, Alert, Container, Col, Card,
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { loginUser } from '../actions/authentication';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get('username');
    const password = data.get('password');
    // eslint-disable-next-line react/prop-types
    this.props.onLogin(username, password).then((result) => {
      console.log(result);
      if (result.code === 0) {
        Cookies.set('user', result.data);
      }
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <Container>
        <br />
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>
                <h2 className="text-center">Đăng nhập</h2>
              </Card.Title>
              <Card.Text>
                <Form className="p-5" onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label>Tên người dùng : </Form.Label>
                    <Form.Control id="username" name="username" type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Mật khẩu : </Form.Label>
                    <Form.Control id="password" name="password" type="password" />
                  </Form.Group>
                  <Alert show={this.props.mess !== undefined} variant="warning">{this.props.mess}</Alert>
                  <Form.Group>
                    <Button variant="primary" size="lg" type="submit" block>Đăng nhập</Button>
                    <p className="d-flex justify-content-center">Hoặc</p>
                    <div className="d-flex justify-content-around">
                      <button type="button" className="btn btn-fb">
                        <i className="fab fa-facebook-f pr-1" />
                        Facebook
                      </button>
                      <button type="button" className="btn btn-gplus">
                        <i className="fab fa-google-plus-g pr-1" />
                        Google +
                      </button>
                    </div>
                  </Form.Group>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  }
}

// export default withRouter(Login);
const mapStateToProps = (state) => ({
  authed: state.authentication.authed,
  user: state.authentication.user,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (username, password) => dispatch(actions.login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
