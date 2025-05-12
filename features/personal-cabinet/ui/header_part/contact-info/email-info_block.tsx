"use client";

import { usePersonalDataStore } from "@/store/personal-data.slice";
import Image from "next/image";
import { useRef, useState } from "react";

export const EmailInfoBlock = () => {
    const input = useRef<HTMLInputElement>(null),
        [editable, setEditable] = useState<boolean>(false),
        [error, setError] = useState<string | null>(null),
        personalDataEmail = usePersonalDataStore((state) => state.data.email),
        setPersonalDataEmail = usePersonalDataStore((state) => state.setData);

    const emailRegex = /^\S+@\S+\.\S+$/;

    const onApply = () => {
        const inputValue = input.current?.value ?? "";
        if (!emailRegex.test(inputValue)) {
            setError("Введите корректный e-mail");
            return;
        }
        setError(null);
        setPersonalDataEmail({ email: inputValue });
        setEditable(false);
    };

    return (
        <div className="flex items-center justify-between border-b-[1px] border-[#3d4045] pb-[4px]">
            <p className="text-[14px] font-medium text-[#949597]">E-mail:</p>
            <div className="flex flex-col">
                <input
                    type="email"
                    className="w-[185px] h-[26p] bg-[#3e4146] text-lemony placeholder:text-[#7b7d7d] rounded-[3px] px-[10px] cursor-pointer"
                    placeholder="E-mail:"
                    ref={input}
                    defaultValue={personalDataEmail}
                    onFocus={() => setEditable(true)}
                />
                {error && (
                    <span className="text-[14px] font-medium text-red-500 mt-1">{error}</span>
                )}
            </div>
            {editable ? (
                <span
                    className="text-[14px] font-medium text-white cursor-pointer"
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
