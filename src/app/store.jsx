import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../features/dishes/restaurantSlice';

export const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
    },
});

export default store;