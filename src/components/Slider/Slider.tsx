"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";

interface SliderData {
    src: string;
    alt: string;
}

const images: SliderData[] = [
    {
        src: "https://www.jornalopcao.com.br/assets/2024/07/Kamala-Trump.jpg",
        alt: "Image 1",
    },
    {
        src: "https://www.israelhayom.com/wp-content/uploads/2020/05/Benjamin-netanyahu-ali-khamenei-1140x570.jpg",
        alt: "Image 2",
    },
    {
        src: "https://thehill.com/wp-content/uploads/sites/2/2023/02/zelensky_putin-1.jpg?w=876&h=493&crop=1",
        alt: "Image 3",
    },
]

export default function Slider() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentImage((current) => (current === images.length - 1 ? 0 : current + 1));
    };

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        if(!isHovered) {
            const interval = setInterval(() => {
                nextImage();
            }, 3000)

            return () => clearInterval(interval);
        };
    }, [isHovered]);

    return (
        <div className="relative w-full mx-auto">
            <div
                className="relative h-[150px] sm:h-[260px]  mx-12 group"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
            <Image
                src={images[currentImage].src}
                alt={`${images[currentImage].alt}`}
                fill={true}
                style={{ objectFit: 'cover' }}
                className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
            />
            </div>
            <button
                className="absolute left-0 top-1/2 transform h-[259px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
                onClick={prevImage}
            >
                <ChevronLeft className="text-gray-400 group-hover:text-white" />
            </button>
            <button
                className="absolute right-0 top-1/2 transform h-[259px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
                onClick={nextImage}
            >
                <ChevronRight className="text-gray-400 group-hover:text-white" />
            </button>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-10 mx-1 ${
                        index === currentImage
                            ? "bg-blue-900 rounded-xl"
                            : "bg-gray-300 rounded-xl"
                        } transition-all duration-500 ease-in-out`}
                    ></div>
                ))}
            </div>
    </div>
    );
}
