import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PinCodeState {
    input: string;
    correctPin: string;
}

const initialState: PinCodeState = {
    input: '',
    correctPin: '1337',
};



export const PinCodeSlice = createSlice({
    name: 'pinCode',
    initialState,
    reducers: {
        addPinCode: (state, action: PayloadAction<string>) => {
            if (state.input.length < 4) {
                state.input += action.payload;
            }
        },
    }
});
export const PinCodeReducer = PinCodeSlice.reducer;
export const {addPinCode} = PinCodeSlice.actions;