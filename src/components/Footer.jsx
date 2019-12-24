import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h3>Gia sư online</h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Trang web</h3>
                            <ul>
                                <li>Thông tin</li>
                                <li>Kinh nghiệm</li>
                                <li>Tham gia với chúng tôi</li>
                                <li>Thành viên</li>
                                <li>Phản hồi</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Hỗ trợ</h3>
                            <ul>
                                <li>Chính sách và điều khoản</li>
                                <li>Riêng tư</li>
                                <li>Kết nối với chúng tôi</li>
                                <li>Trung tâm hỗ trợ</li>
                                <li>Bản đồ</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Mục khác</h3>
                            <ul className="network">
                                <li><i className="fa fa-facebook-square"></i></li>
                                <li><i className="fa fa-twitter-square"></i></li>
                                <li><i className="fa fa-instagram"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="container register">
                    <div className="row">
                        <div className="col">
                            <p>Trường Đại học Khoa học Tự nhiên Hồ Chí Minh</p>
                            <p>227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
