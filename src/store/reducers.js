import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import blogs from '../components/blogs/reducer';


const Reducers = combineReducers ({
    blogs,
    form
});

export default Reducers;