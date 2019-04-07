import { combineReducers } from 'redux'
import characterReducer from './charactersReducer';
import favoriteReducer from './favoriteReducer';
import gachaReducer from './gachaRedcuer';

const rootRedcuer = combineReducers({
    stats : characterReducer,
    favorite : favoriteReducer,
    gacha : gachaReducer
})
export default rootRedcuer