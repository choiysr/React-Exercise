import {combineReducers} from 'redux';
import countReducer from './countReducer';
import todoReducer from './todoReducer';

// countReducer와 todoReducer를 결합 시켜줄 것임  > 여러개의 reducer를 합친걸 root reducer라 한다.

// countReducer : countReducer... 축약 
export const rootReducer = combineReducers({countReducer, todoReducer})