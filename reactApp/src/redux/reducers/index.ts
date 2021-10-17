import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user';
export default combineReducers({
    toastr: toastrReducer,
    user: userReducer,
    form: formReducer,
});
