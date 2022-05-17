import {combineReducers, configureStore} from '@reduxjs/toolkit';

import productsReducer from './slices/products.slice';
import commentsReducer from "./slices/comments.slice";

const rootReducer = combineReducers({commentsReducer, productsReducer})

const store = configureStore({
    reducer: rootReducer,

})

export default store;