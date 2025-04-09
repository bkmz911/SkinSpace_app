interface IntermediateBlockProps {
    style: string;
    className: string;
}

export const IntermediateBlock = ({
    style,
    className,
}: IntermediateBlockProps) => {
    return             <div
    style={{
        background:
            `${style}`,
    }}
    className={`${className}`}
></div>;
};
