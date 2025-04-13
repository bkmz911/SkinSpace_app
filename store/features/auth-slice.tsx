import { UserType } from "@/shared/lib/user-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    isLoading: false,
    error: "",
    value: null as UserType | null,
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        loginStart: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        loginSuccess: (state, action: PayloadAction<UserType>) => {
            state.isAuth = true;
            state.isLoading = false;
            state.value = action.payload;
        },
        loginFailed: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { logOut, loginStart, loginSuccess, loginFailed } = auth.actions;
export default auth.reducer;
