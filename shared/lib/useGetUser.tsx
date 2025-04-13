import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
    loginFailed,
    loginStart,
    loginSuccess,
} from "@/store/features/auth-slice";

const API_URL = process.env.NEXT_API_URL || "http://localhost:3001";

export const useGetUser = () => {
    const dispatch = useAppDispatch(),
        user = useAppSelector((state) => state.auth.value),
        isLoading = useAppSelector((state) => state.auth.isLoading),
        error = useAppSelector((state) => state.auth.error);
    useEffect(() => {
        async function fetchUser() {
            dispatch(loginStart());
            try {
                const response = await fetch(`${API_URL}/api/user`, {
                        credentials: "include",
                    }),
                    user = await response.json();
                dispatch(loginSuccess(user._json));
            } catch (error) {
                const err = error as Error;
                dispatch(loginFailed(err.message));
            }
        }
        fetchUser();
    }, [dispatch]);

    return {
        user,
        isLoading,
        error,
    };
};
