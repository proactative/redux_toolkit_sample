import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    phrase: "Hello!"
}

export const testSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        greetings: (state, action) => {
            state.phrase = action.payload;
        }

    }
})

export const {increment, decrement, reset, greetings} = testSlice.actions;
export default testSlice.reducer;