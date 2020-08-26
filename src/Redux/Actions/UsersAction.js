import * as UsersConstant from '../Constant/UsersConstant';
export function addUser(user){
  return{
    type: UsersConstant.NEW_BOOKING,
    user,
  }
}

