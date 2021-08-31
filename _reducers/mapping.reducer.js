import {mappingActions} from '_actions'

const initialState = { domains: []}

export function mapping(state = initialState, action) {
  switch (action.type) {
    case mappingActions.types.get:
      if(action.payload.length == 0) return initialState
      return {
        domains: action.payload
      };
    default:
      return state;
  }
}
