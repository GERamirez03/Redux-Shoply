import { products } from "./data.json";
import { ADD, REMOVE } from "./actionTypes";

const INITIAL_STATE = { products, cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return { ...state, 
                cart: { ...state.cart, 
                    [action.payload]: state.cart[action.payload] 
                        ? state.cart[action.payload] + 1 
                        : 1 
            }};
        case REMOVE:
            return { ...state, 
                cart: { ...state.cart, 
                    [action.payload]: state.cart[action.payload] <= 1
                        ? 0 
                        : state.cart[action.payload] - 1 
            }};
        default:
            return state;
    }
}

export default rootReducer;