import { configureStore } from '@reduxjs/toolkit';
// reducer
import users from './slices/users/userSlice';

export default configureStore({
  reducer: {
    users
  }
});