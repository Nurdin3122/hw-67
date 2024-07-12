import { configureStore } from '@reduxjs/toolkit';
import {PinCodeReducer} from "../PinCodeSlice/PinCode.ts";



export const store = configureStore({
    reducer: {
        pinCode: PinCodeReducer,
    },

});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;