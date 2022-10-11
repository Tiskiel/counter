import { createReducer } from "@reduxjs/toolkit"
import { countDec, countInc, countRes } from "../action/count-action"

const initialState = {
    count : 0,
}

export const countReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(countInc, (state, action) => {
            state.count = state.count + action.payload.countPlus
        })
        .addCase(countDec, (state, action) => {
            state.count = state.count - action.payload.countMoin
        })
        .addCase(countRes, (state, action) => {
            state.count = 0
        })
})