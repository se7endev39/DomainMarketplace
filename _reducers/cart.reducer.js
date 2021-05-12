import {cartActions} from '_actions'

const initialState = { total:0, cart: []}

export function cart(state = initialState, action) {
  switch (action.type) {
    case cartActions.types.get:
      if(action.payload.length == 0) return initialState
      return {
        total: action.payload.total,
        cart: action.payload.cart
      };
    case cartActions.types.clear:
      return initialState
    default:
      return state;
  }
}
