import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {createWrapper} from "next-redux-wrapper";

const makeStore = context => createStore(rootReducer);
export const wrapper = createWrapper(makeStore, {debug: true});
