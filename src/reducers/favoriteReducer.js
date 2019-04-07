import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../action/action";

const favoriteReducer = (state = [], action) => {
    switch (action.type) {
    
        case ADD_TO_FAVORITE:
        return [...state, action.payload]

        case REMOVE_FROM_FAVORITE:
        return state.filter(item => item.id !== action.payload.id)

        default:
            return state;
    }
}
export default favoriteReducer