import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface PersonalData {
    email?: string;
    phoneNumber?: string;
    tg?: string;
    tradeLink?: string
    apiKey: string;
}

interface PersonalDataState {
    data: PersonalData;
    setData: (items: Partial<PersonalData>) => void;
}

export const usePersonalDataStore = create<PersonalDataState>()(
    persist(
        (set) => ({
            data: {
                apiKey: "",
            },
            setData: (items) => set((state) => ({
                data: {...state.data, ...items}
            })),
        }),
        { name: "personal-data" }
    )
);
