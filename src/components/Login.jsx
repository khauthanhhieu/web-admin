import React from 'react';
import {
  Button, Form, Alert, Container, Col,
} from 'react-bootstrap';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    // eslint-disable-next-line react/prop-types
    this.props.onLogin(data.get('username'), data.get('password')).then(() => {
      this.props.history.push('/');
    });
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
            <Alert show={this.props.mess !== undefined} variant="warning">{ this.props.mess }</Alert>
            <Form.Group>
              <Button variant="primary" size="lg" type="submit" block>Đăng nhập</Button>
              hoặc
              {' '}
              <Alert.Link href="/register">Đăng kí !</Alert.Link>
            </Form.Group>
          </Form>
        </Col>
      </Container>
    );
  }
}

export default Login;
