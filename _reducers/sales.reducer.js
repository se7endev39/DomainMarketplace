import { salesActions } from '_actions'

const initialState = []

export function sales(state = initialState, action) {
  switch (action.type) {
    case salesActions.types.get:
      return [ ...action.payload ]
    default:
      return state;
  }
}
