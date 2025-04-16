"use client";
import { useGetUser } from "@/shared/lib/useGetUser";
import {
    WarningBlockAuth,
    WarningBlockUnauth,
    PreloaderData,
    ErrorBlock,
} from "@/shared/ui";

export const RecentDealsItems = () => {
    const { user, isLoading, error } = useGetUser();

    if (isLoading) return <PreloaderData />;
    if (error)
        return (
            <ErrorBlock text="Не удалось получить информацию о предметах! Попробуйте позже." />
        );

    return user ? <WarningBlockAuth /> : <WarningBlockUnauth />;
};
