import Image from "next/image";

const className =
        "w-[225px] h-[145px] mr-[40px] text-center pt-[20px] relative before:content-[''] before:absolute before:block before:w-[15%] before:h-[145px] before:translate-x-[-100%] before:origin-bottom before:skew-x-[-10deg] before:bg-[#313134] before:left-0 before:bottom-0 after:content-[''] after:absolute after:block after:w-[15%] after:h-[145px] after:translate-x-[2%] after:origin-bottom after:skew-x-[-10deg] after:bg-[#313134] after:right-0 after:top-0 bg-[#4c4f55] bg-radial-[circle,rgba(76,79,85,1)_0%,rgba(76,79,85,1)_5%,rgba(49,49,52,1)_60%]",
    width = 138,
    height = 62,
    products = [
        {
            id: 1,
            src: "/bizon.webp",
            alt: "bizon",
            className,
            width,
            height,
            price: 150.2,
            time: 20,
        },
        {
            id: 2,
            src: "/bizon.webp",
            alt: "bizon",
            className,
            width,
            height,
            price: 150.2,
            time: 20,
        },
        {
            id: 3,
            src: "/bizon.webp",
            alt: "bizon",
            className,
            width,
            height,
            price: 150.2,
            time: 20,
        },
        {
            id: 4,
            src: "/bizon.webp",
            alt: "bizon",
            className,
            width,
            height,
            price: 150.2,
            time: 20,
        },
        {
            id: 5,
            src: "/bizon.webp",
            alt: "bizon",
            className,
            width,
            height,
            price: 150.2,
            time: 20,
        },
        {
            id: 6,
            src: "/bizon.webp",
            alt: "bizon",
            className,
            width,
            height,
            price: 150.2,
            time: 20,
        },
    ];

export const RecentDealsItems = () => {
    return (
        <div className="flex items-center justify-center flex-wrap gap-5 pl-[50px] mx-[35px] xl:mx-[60px] mt-[70px]">
            {products.map((product) => {
                return (
                    <div className={product.className} key={product.id}>
                        <Image
                            src={product.src}
                            className="mx-auto"
                            width={product.width}
                            height={product.height}
                            alt={product.alt}
                        />
                        <span className="text-[16px] font-medium text-lemony block pt-[15px]"> ₽ {product.price} </span>
                        <span className="text-[14px] text-[#9a9a9b] font-medium"> {product.time} мин. назад </span>
                    </div>
                );
            })}
        </div>
    );
};
