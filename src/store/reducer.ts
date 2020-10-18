import { Reducer, combineReducers } from 'redux';
import appModalReducer from "../entities/common/AppModal/service/appModalReducer";

const rootReducer: Reducer = combineReducers({
    appModalReducer
});

export default rootReducer;
