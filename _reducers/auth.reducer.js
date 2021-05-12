import {authActions} from '_actions'

const initialState = 
{
  token: null,
  user: null,
  signed: false
}

export function auth(state = initialState, action) {
  switch (action.type) {
    case authActions.types.signUp:
      return { ...action.payload.data, signed: true};
    case authActions.types.signIn:
      return { ...action.payload.data, signed: true }
    case authActions.types.singOut:
      return initialState
    default:
      return state;
  }
}
