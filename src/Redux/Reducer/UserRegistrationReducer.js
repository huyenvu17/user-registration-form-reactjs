import * as UsersConstant from '../Constant/UsersConstant';

const usersRegistration = {
  newUser: {
    ho: '', 
    ten: '', 
    taiKhoan: '', 
    matKhau: '',  
    email: '', 
    xacNhan: ''
  }
}

export default (state = usersRegistration, action) => {
  switch (action.type){
    case UsersConstant.NEW_USER: {
      state.newUser = {...action.user};
      return {...state}
    }
  }
  return {...state}
}
