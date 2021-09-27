import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes: 20,
    cash: 1000
}

const cakeReducer = (state = initialState, action) =>{
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
                cash: state.cash + 100
            }
        default: return state   
    }   
}

export default cakeReducer