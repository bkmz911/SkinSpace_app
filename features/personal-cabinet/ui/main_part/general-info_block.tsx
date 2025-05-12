"use client";

import {
    PersonalData,
    usePersonalDataStore,
} from "@/store/personal-data.slice";
import Image from "next/image";
import { useRef, useState } from "react";
import { useAutoMessageSend } from "../../api/useAutoMessageSend";
import Link from "next/link";

interface GeneralInfoBlockProps {
    name: string;
    action: string;
    field: keyof PersonalData;
    userID?: string;
}

export const GeneralInfoBlock = ({
    name,
    action,
    field,
    userID,
}: GeneralInfoBlockProps) => {
    const input = useRef<HTMLInputElement>(null),
        [editable, setEditable] = useState<boolean>(false),
        [error, setError] = useState<string | null>(null),
        personalData = usePersonalDataStore((state) => state.data),
        setPersonalData = usePersonalDataStore((state) => state.setData);

    const tradeLinkRegex =
            /^https:\/\/steamcommunity\.com\/tradeoffer\/new\/\?partner=\d{17,17}&token=[A-Za-z0-9_-]{6,12}$/,
        apiKeyRegex = /^[A-Fa-f0-9]{32}$/;

    const onApply = () => {
        const inputValue = input.current?.value ?? "";

        if (field === "tradeLink") {
            if (!tradeLinkRegex.test(inputValue)) {
                setError(
                    "Неверный формат Trade link. Убедитесь, что ссылка введена правильно."
                );
                return;
            }
        }

        if (field === "apiKey") {
            if (!apiKeyRegex.test(inputValue)) {
                setError(
                    "Неверный формат API-ключа. Ключ должен состоять из 32 символов: цифр и латинских букв."
                );
                return;
            }
        }

        setPersonalData({ [field]: inputValue });
        setEditable(false);
    };

    useAutoMessageSend();

    return (
        <div className="flex items-center justify-between pb-[5px] border-b-[1px] border-[#3d4045]">
            <p className="text-[14px] font-medium text-[#949597]">{name}</p>
            <div className="flex flex-col">
                <input
                    type="text"
                    placeholder={name}
                    className="w-[520px] h-[32px] bg-[#3e4146] rounded-[3px] text-lemony placeholder:text-[#7b7d7d] px-[15px] cursor-pointer"
                    ref={input}
                    defaultValue={personalData[field]}
                    onFocus={() => setEditable(true)}
                />
                {error && (
                    <span className="text-[12px] font-medium text-red-500 mt-1">
                        {error}
                    </span>
                )}
            </div>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`${
                    field === "apiKey"
                        ? "https://steamcommunity.com/dev/apikey"
                        : `https://steamcommunity.com/profiles/${userID}/tradeoffers/privacy`
                }`}
                className="text-[14px] text-white font-medium cursor-pointer"
            >
                {action}
            </Link>
            {editable ? (
                <span
                    className="text-[14px] text-white font-medium cursor-pointer"
                    onClick={onApply}
                >
                    Применить
                </span>
            ) : (
                <Image
                    src={"/pencil-icon.svg"}
                    width={14}
                    height={14}
                    alt="pencil-icon"
                    className="cursor-pointer"
                    onClick={() => {
                        input.current?.focus();
                        setEditable(true);
                    }}
                />
            )}
        </div>
    );
};
