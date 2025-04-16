import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'; // ✅ import thunk as a default export
import AuthReducers from './Reducers/AuthReducers';

const rootReducer = combineReducers({
  auth: AuthReducers,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk), // ✅ applyMiddleware expects functions like thunk
);

export default store;
