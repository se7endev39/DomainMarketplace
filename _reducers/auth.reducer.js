import {authActions} from '_actions'
import jsonwebtoken from 'jsonwebtoken'

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
      const { email } = jsonwebtoken.decode( action.payload.token )
      return { ...action.payload.data, email, signed: true }
    case authActions.types.signOut:
      return initialState
    default:
      return state;
  }
}
