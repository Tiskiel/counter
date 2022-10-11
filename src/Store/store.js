import { configureStore } from "@reduxjs/toolkit"
import { countReducer } from "./reducer/count-reducer"


export const store = configureStore({
    reducer: {
        countNumber: countReducer,
    },
    devTools: process.env.NODE_ENV !== "production"
})