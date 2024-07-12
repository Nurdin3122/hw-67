import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PinCodeState {
    input: string;
    correctPin: string;
    condition:string;
}

const initialState: PinCodeState = {
    input: '',
    correctPin: '1337',
    condition:''
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
        checkPinCode: (state,action) => {
            if(state.input === state.correctPin) {
               state.condition = 'Access Granted';
            } else {
                state.condition = 'Access Denied';
            }
        },
        deletePinCode:(state,action) => {
            state.input = state.input.slice(0,-1);
        }
    }
});
export const PinCodeReducer = PinCodeSlice.reducer;
export const {addPinCode,checkPinCode,deletePinCode} = PinCodeSlice.actions;