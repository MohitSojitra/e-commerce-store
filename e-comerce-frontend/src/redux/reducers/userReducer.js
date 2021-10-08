import * as actionTypes from '../constants/userContants'
export const USER_INITIAL_STATE = {
  userInfo: {
    isLogin: false,
    details: {},
  },
}

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {userInfo: {...action.payload}}
    case actionTypes.SET_INITIAL_STATE:
      return USER_INITIAL_STATE

    default:
      return state
  }
}
