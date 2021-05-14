import {searchActions} from '_actions'

const initialState = []

export function search(state = initialState, action) {
  switch (action.type) {
    case searchActions.types.search:
      return [ ...action.payload ]
    default:
      return state;
  }
}
