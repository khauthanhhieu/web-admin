import React from 'react';
import {
  Button, Form, Container, Col, Alert,
} from 'react-bootstrap';

class Register extends React.Component {
  constructor(prop) {
    super(prop);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("Register");
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = {
      fullname: data.get('fullname'),
      email: data.get('email'),
      username: data.get('username'),
      password: data.get('password'),
    };
    await this.props.onRegister(user);
    if (!this.props.mess) {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <Container>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Thêm tài khoản quản trị</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control id="fullname" name="fullname" type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control id="email" name="email" type="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tên người dùng</Form.Label>
              <Form.Control id="username" name="username" type="text" />
              <Form.Text show={this.props.mess !== undefined}>{this.props.mess}</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control id="password" name="password" type="password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nhập lại mật khẩu</Form.Label>
              <Form.Control id="repassword" name="repassword" type="password" />
            </Form.Group>
            <Form.Group>
              <Button type="submit" size="lg" block>Đăng kí</Button>
              <Alert color="primary">
                Bạn đã có tài khoản ?
                <Alert.Link href="/login"> Đăng nhập ngay </Alert.Link>
              </Alert>
            </Form.Group>
          </Form>
        </Col>
      </Container>
    );
  }
}

export default Register;
