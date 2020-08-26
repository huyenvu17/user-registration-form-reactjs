import React, { Component } from "react";

export default class UserRegistrationForm extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="card text-white bg-light text-dark mt-3">
          <div className="card-header font-weight-bold bg-dark text-light text-center">
            THÔNG TIN NGƯỜI DÙNG
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Họ</p>
                    <input label="Họ" className="form-control" name="ho" />
                    <p className="text text-danger"></p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Tên</p>
                    <input label="Tên" className="form-control" name="ten" />
                    <p className="text text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <p>Tài khoản</p>
                    <input
                      label="Tài khoản"
                      className="form-control"
                      name="taiKhoan"
                    />
                    <p className="text text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <p>Email</p>
                    <input
                      label="Email"
                      type="email"
                      className="form-control"
                      name="email"
                    />
                    <p className="text text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Mật khẩu</p>
                    <input
                      label="Mật khẩu"
                      type="password"
                      className="form-control"
                      name="matKhau"
                    />
                    <p className="text text-danger"></p>
                  </div>
                </div>
                <div className="col-6">
                <div className="form-group">
                  <p>Xác nhận</p>
                  <input
                    label="Tài khoản"
                    className="form-control"
                    name="taiKhoan"
                  />
                  <p className="text text-danger"></p>
                </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <button
                      className="btn btn-primary"
                      type="button"
                    >
                      Xác nhận
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
