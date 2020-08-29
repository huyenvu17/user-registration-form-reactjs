import React, { Component } from 'react';
import {connect} from 'react-redux';
export default class InfoForm extends Component {
  render() {
    let {userInfo} = this.props;
    return (
      <div>
        <h3>Thông tin người dùng</h3>
        <form className="infor-form">
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-5 col-form-label">Họ</label>
            <div className="col-sm-7">
              <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={userInfo.ho} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-5 col-form-label">Tên</label>
            <div className="col-sm-7">
              <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={userInfo.ten} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-5 col-form-label">Tài Khoản</label>
            <div className="col-sm-7">
              <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={userInfo.taiKhoan} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-5 col-form-label">Mật Khẩu</label>
            <div className="col-sm-7">
              <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={userInfo.matKhau} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-5 col-form-label">Email</label>
            <div className="col-sm-7">
              <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={userInfo.email} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-5 col-form-label">Xác nhận</label>
            <div className="col-sm-7">
              <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={userInfo.xacNhan} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

