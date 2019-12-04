import React from 'react';
import {
  Button, Form, Alert, Container, Col,
} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("Login")
  }

  async login(username, password) {
    return await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json())
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    // eslint-disable-next-line react/prop-types
    var username = data.get("username")
    var password = data.get("password")
    this.login(username, password).then((result) => {
      if (result.code === 0) {
        Cookies.set('user', result.data);
      }
      this.props.history.push('/');
    })

  }

  render() {
    return (
      <Container>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Đăng nhập</h1>
          <Form onSubmit={this.handleSubmit}>
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
        </Col>
      </Container>
    );
  }
}

export default withRouter(Login);
