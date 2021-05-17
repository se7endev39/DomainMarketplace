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
    case authActions.types.signIn:
      const { id, email } = jsonwebtoken.decode( action.payload.token )
      return { ...action.payload.data, email, id,  signed: true }
    case authActions.types.signOut:
      return initialState
    default:
      return state;
  }
}
