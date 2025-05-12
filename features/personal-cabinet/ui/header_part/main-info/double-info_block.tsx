
interface DoubleInfoBlockProps {
    desc: string
    value: string | number
}

export const DoubleInfoBlock = ({desc, value}: DoubleInfoBlockProps) => {
    return (
        <div className="flex items-center justify-between border-b-[1px] border-[#3d4045]">
            <p className="text-[14px] font-medium text-[#949597]">{desc}</p>
            <span className="text-[14px] font-medium text-lemony">{value}</span>
        </div>
    );
};
