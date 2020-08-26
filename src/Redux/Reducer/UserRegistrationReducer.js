import * as UsersConstant from '../Constant/UsersConstant';


const usersRegistration = {
  users: [
    {ho: 'Nguyen', ten: 'Linh', taiKhoan: 'linhnguyen', matKhau: '123',  email: 'linhnguyen@gmail.com', xacNhan: true}
  ],
}

export default (state = usersRegistration, action) => {
  switch (action.type){
    case UsersConstant.NEW_BOOKING: {
      
      return {...state}
    }
    
  }
  return {...state}
}
