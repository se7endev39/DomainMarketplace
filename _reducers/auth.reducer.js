import {authActions} from '_actions'

const initialState = 
{
  token: null,
  user: null,
}

export function auth(state = initialState, action) {
  switch (action.type) {
    case authActions.types.signUp_success:
      return { ...action.payload.data };
    case authActions.types.signIn_success:
      return { ...action.payload.data }
    case authActions.types.singOut:
      return initialState
    default:
      return state;
  }
}
