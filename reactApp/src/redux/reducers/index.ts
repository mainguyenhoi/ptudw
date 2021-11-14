import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user';
import WorkFormReducer from './workformReducer';
export default combineReducers({
    toastr: toastrReducer,
    user: userReducer,
    workform: WorkFormReducer,
    form: formReducer,
});
