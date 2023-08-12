import { BUY_CHOCOLATE } from "./chocolateTypes";

const initialState = {
    numOfChocolates: 30
}

const chocolateReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CHOCOLATE:
            return {
                ...state,
                numOfChocolates: state.numOfChocolates - 1
            }

        default: return state
    }
}

export default chocolateReducer