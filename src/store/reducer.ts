import {combineReducers} from '@reduxjs/toolkit';

import FactsReducer from './slices/FactSlice';

const reducer = combineReducers({
  factsData: FactsReducer,
});

export default reducer;
