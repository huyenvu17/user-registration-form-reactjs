import * as UsersConstant from '../Constant/UsersConstant';
export function newUser(user){
  return{
    type: UsersConstant.NEW_USER,
    user,
  }
}
