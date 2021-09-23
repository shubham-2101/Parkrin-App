import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
export default store = createStore(rootReducer);