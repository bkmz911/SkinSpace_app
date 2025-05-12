"use client";
import {
    PersonalData,
    usePersonalDataStore,
} from "@/store/personal-data.slice";
import Image from "next/image";
import { useRef, useState } from "react";

interface TripleInfoBlockProps {
    desc: string;
    value: string;
    field: keyof PersonalData;
}

export const TripleInfoBlock = ({
    desc,
    value,
    field,
}: TripleInfoBlockProps) => {
    const [editable, setEditable] = useState<boolean>(false),
        [error, setError] = useState<string | null>(null),
        personalData = usePersonalDataStore((state) => state.data),
        setPersonalData = usePersonalDataStore((state) => state.setData),
        input = useRef<HTMLInputElement>(null);

    const tgRegex = /^[A-Za-z0-9_]{5,32}$/,
        phoneRegex = /^\+[0-9]{7,15}$/;

    const onApply = () => {
        const inputValue = input.current?.value.trim() ?? "";
        if (field === "tg") {
            if (!tgRegex.test(inputValue)) {
                setError(
                    "Username должен быть 5–32 символа, без пробелов, допустимы “_”"
                );
                return;
            }
        }
        if (field === "phoneNumber") {
            if (!phoneRegex.test(inputValue)) {
                setError("Номер телефона должен начинаться с + и содержать 7–15 цифр");
                return;
            }
        }
        setError(null);
        setPersonalData({ [field]: inputValue });
        setEditable(false);
    };

    return (
        <div className="flex flex-col pb-[4px] border-b-[1px] border-[#3d4045]">
            <div className="flex items-center justify-between">
                <p className="text-[14px] font-medium text-[#949597]">{desc}</p>
                <input
                    type="text"
                    className="text-[14px] w-[185px] h-[26px] rounded-[3px] placeholder:text-[#949597] text-lemony font-medium px-[5px]"
                    placeholder={value}
                    defaultValue={personalData[field]}
                    ref={input}
                    readOnly={!editable}
                    onFocus={() => setEditable(true)}
                />
                {editable ? (
                    <p
                        className="text-[14px] font-medium text-white cursor-pointer"
                        onClick={onApply}
                    >
                        Применить
                    </p>
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
            {error && (
                <span className="text-[14px] font-medium text-red-500 mt-1">
                    {error}
                </span>
            )}
        </div>
    );
};
