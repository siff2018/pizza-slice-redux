import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from './pizzaSlice'



const store = configureStore(
    {
        reducer: {
            pizza : PizzaReducer,
        }
    }
);

export default store;