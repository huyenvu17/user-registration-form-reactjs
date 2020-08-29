import React, { Component } from "react";
import '../UserRegistrationForm/formStyles.css';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import InfoForm from "./InfoForm";
import * as actionfunction from '../../Redux/Actions/UsersAction';
const MySwal = withReactContent(Swal);

class UserRegistrationForm extends Component {
  state = {
    values: {
      ho: '',
      ten: '',
      taiKhoan: '',
      matKhau: '',
      email: '',
      xacNhan: ''
    },
    errors: {
      ho: '',
      ten: '',
      taiKhoan: '',
      matKhau: '',
      email: '',
      xacNhan: ''
    }
  }
  handleChange = (e) => {
    let targetInpput = e.target;
    let {name, value, type} = targetInpput;
    let label = e.target.getAttribute('label');
    let errorMessages= '';
   
    if(value.trim() == ''){
      errorMessages = label  + ' không được bỏ trống';
    }
    if(type == 'email'){
      let regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!regexEmail.test(value)){
        errorMessages = label  + ' không đúng định dạng';
      }
    }
    let values = {...this.state.values, [name]: value}
    let errors = {...this.state.errors, [name]: errorMessages}
    this.setState({
      values: values,
      errors: errors
    }, ()=> console.log(this.state))
  }
  showInformation = () => {
    let {values, errors} = this.state;
    for (let key in values) {
      if (values[key].trim() === '') {
        alert('Dữ liệu không hợp lệ!');
        return;
      }
    }
    for (let key in errors) {
      if (errors[key].trim() !== '') {
        alert('Dữ liệu không hợp lệ!');
        return;
      }
    }
    this.props.themNguoiDung(this.state.values);
    MySwal.fire({
      html: <InfoForm userInfo={this.state.values} />,
    });
  }
  componentWillReceiveProps(newProps){
    console.log('componentWillReceiveProps',newProps.thongTinNguoiDungMoi);
    this.setState({values: newProps.thongTinNguoiDungMoi});
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="card mt-3 registration-form">
          <div className="card-header font-weight-bold text-center">
            THÔNG TIN NGƯỜI DÙNG
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-6">
                <div className="form-group">
                    <p>Họ</p>
                    <input label="họ" className="form-control" name="ho" 
                    value={this.state.values.ho}
                     onChange={this.handleChange} />
                    <p className="text text-danger">{this.state.errors.ho}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Tên</p>
                    <input label="Tên" className="form-control" name="ten" value={this.state.values.ten} onChange={this.handleChange} />
                    <p className="text text-danger">{this.state.errors.ten}</p>
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
                      value={this.state.values.taiKhoan}
                      onChange={this.handleChange}
                    />
                    <p className="text text-danger">{this.state.errors.taiKhoan}</p>
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
                      value={this.state.values.email}
                      onChange={this.handleChange}
                    />
                    <p className="text text-danger">{this.state.errors.email}</p>
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
                      value={this.state.values.matKhau}
                      onChange={this.handleChange}
                    />
                    <p className="text text-danger">{this.state.errors.matKhau}</p>
                  </div>
                </div>
                <div className="col-6">
                <div className="form-group">
                  <p>Xác nhận</p>
                  <input
                    label="Xác nhận"
                    className="form-control"
                    name="xacNhan"
                    value={this.state.values.xacNhan}
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.xacNhan}</p>
                </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <button
                      className="btn btn-dark"
                      type="button"
                      onClick={() => this.showInformation()}
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


const mapDispatchToProps = dispatch => {
  return{
    themNguoiDung: (nguoiDung) =>{
      dispatch(actionfunction.newUser(nguoiDung));
    }
  }
}
const mapStateToProps = state => {
  return{
    thongTinNguoiDungMoi: state.UserRegistrationReducer.newUser
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserRegistrationForm)
