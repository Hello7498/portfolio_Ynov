import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import languageReducer from '../features/Languages/languageSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer
  },
});
