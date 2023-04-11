import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../store";

export interface LoginState {
    value: boolean
}

const initialState: LoginState = {
    value: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        },
    },
})

export const { setLogin } = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLoggedIn = (state: RootState) => state.login.value

export default loginSlice.reducer