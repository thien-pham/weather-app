import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';

// const middlewares = composeWithDevTools(
//   applyMiddleware(
//     thunk,
//     createLogger()
//   )
// );

export default createStore(reducer, applyMiddleware(thunk));
