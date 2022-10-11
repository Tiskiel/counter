import { createAction } from "@reduxjs/toolkit";

export const countInc = createAction('count/inc')
export const countDec = createAction('count/dec')
export const countRes = createAction('count/res')