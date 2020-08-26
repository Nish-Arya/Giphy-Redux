import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
// TODO: Import middleware

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore;