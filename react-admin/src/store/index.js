import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

// 引入各个reducer模块
import order from './modules/order'
import user from './modules/user'
import category from './modules/category'
import goods from './modules/goods'

// 合并多个reducer
const reducer = combineReducers({
    user,
    order,
    category,
    goods
});

// 使用redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 输出store
export default createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

