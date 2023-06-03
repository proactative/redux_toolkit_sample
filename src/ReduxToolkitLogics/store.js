import { configureStore } from "@reduxjs/toolkit";
import TestReducer from "./TestSlice";

export const store = configureStore({
    reducer: {
        test: TestReducer,
    }
})