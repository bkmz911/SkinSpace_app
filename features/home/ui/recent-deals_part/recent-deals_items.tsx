/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { headers } from "next/headers";
// import Image from "next/image";

// // const className =
// //         "w-[225px] h-[145px] mr-[40px] text-center pt-[20px] relative before:content-[''] before:absolute before:block before:w-[15%] before:h-[145px] before:translate-x-[-100%] before:origin-bottom before:skew-x-[-10deg] before:bg-[#313134] before:left-0 before:bottom-0 after:content-[''] after:absolute after:block after:w-[15%] after:h-[145px] after:translate-x-[2%] after:origin-bottom after:skew-x-[-10deg] after:bg-[#313134] after:right-0 after:top-0 bg-[#4c4f55] bg-radial-[circle,rgba(76,79,85,1)_0%,rgba(76,79,85,1)_5%,rgba(49,49,52,1)_60%]",
// //     width = 138,
// //     height = 62,
// //     products = [
// //         {
// //             id: 1,
// //             src: "/bizon.webp",
// //             alt: "bizon",
// //             className,
// //             width,
// //             height,
// //             price: 150.2,
// //             time: 20,
// //         },
// //         {
// //             id: 2,
// //             src: "/bizon.webp",
// //             alt: "bizon",
// //             className,
// //             width,
// //             height,
// //             price: 150.2,
// //             time: 20,
// //         },
// //         {
// //             id: 3,
// //             src: "/bizon.webp",
// //             alt: "bizon",
// //             className,
// //             width,
// //             height,
// //             price: 150.2,
// //             time: 20,
// //         },
// //         {
// //             id: 4,
// //             src: "/bizon.webp",
// //             alt: "bizon",
// //             className,
// //             width,
// //             height,
// //             price: 150.2,
// //             time: 20,
// //         },
// //         {
// //             id: 5,
// //             src: "/bizon.webp",
// //             alt: "bizon",
// //             className,
// //             width,
// //             height,
// //             price: 150.2,
// //             time: 20,
// //         },
// //         {
// //             id: 6,
// //             src: "/bizon.webp",
// //             alt: "bizon",
// //             className,
// //             width,
// //             height,
// //             price: 150.2,
// //             time: 20,
// //         },
// //     ];

// const API_URL = process.env.NEXT_API_URL || "http://localhost:3001";

// export const RecentDealsItems = async () => {
//     const headersList = (await headers()).get("cookie");

//     console.log("Cookie header in RecentDealsItems:", headersList);

//     try {
//         const response = await fetch(`${API_URL}/api/trade-history`, {
//                 headers: {
//                     Cookie: headersList || "",
//                 },
//             }),
//             products = await response.json();

//         console.log(products);

//         return (
//             <div className="flex items-center justify-center flex-wrap gap-5 pl-[50px] mx-[35px] xl:mx-[60px] mt-[70px]">
//                 {products.map((product: any) => {
//                     return (
//                         <div className={product.className} key={product.id}>
//                             <Image
//                                 src={product.src}
//                                 className="mx-auto"
//                                 width={product.width}
//                                 height={product.height}
//                                 alt={product.alt}
//                             />
//                             <span className="text-[16px] font-medium text-lemony block pt-[15px]">
//                                 {" "}
//                                 ₽ {product.price}{" "}
//                             </span>
//                             <span className="text-[14px] text-[#9a9a9b] font-medium">
//                                 {" "}
//                                 {product.time} мин. назад{" "}
//                             </span>
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     } catch (error) {
//         const err = error as Error;
//         return <div>Ошибка при получении сделок: {err.message}</div>;
//     }
// };

"use client";
import { useState, useEffect } from "react";


const API_URL = process.env.NEXT_API_URL || "http://localhost:3001";

export const RecentDealsItems = () => {
    const [inventory, setInventory] = useState<any>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrades = async () => {
            try {
                const response = await fetch(`${API_URL}/api/inventory`, {
                    credentials: "include", // Автоматическая отправка куки
                });
                if (!response.ok) throw new Error("Failed to fetch");
                setInventory(await response.json());
            } catch (err: any) {
                setError(err.message);
            }
        };
        fetchTrades();
    }, []);

    if (error) return <div>Ошибка при получении сделок: {error}</div>;

    console.log(inventory.descriptions);

    return (
        <div className="flex items-center justify-center flex-wrap gap-5 pl-[50px] mx-[35px] xl:mx-[60px] mt-[70px]">
            {inventory?.descriptions?.map((product: any) => (
                <div className={product.className} key={product.id}>
                    <img
                        src={`https://steamcommunity-a.akamaihd.net/economy/image/${product.icon_url}`}
                        className="mx-auto"
                        // width={product.width}
                        // height={product.height}
                        alt={product.alt}
                    />
                    <span className={`text-[16px] font-medium text-lemony block pt-[15px]`}>
                        {/* ₽ {product.price} */}
                        {product.name}
                    </span>
                    <span className="text-[14px] text-[#9a9a9b] font-medium">
                        {product.type} 
                        {/* мин. назад */}
                    </span>
                </div>
            ))}
        </div>
    );
};
