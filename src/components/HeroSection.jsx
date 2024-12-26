import React, { useState, useEffect } from "react";

const HeroSection = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const maxScrollLimit = 100;
    const clampedScrollPosition = Math.min(scrollPosition * 0.1, maxScrollLimit);

    return (
        <div
            className="w-[100%] h-[calc(100vh-106px)] flex items-center pb-[40px] px-[160px] overflow-hidden justify-center headingFont"
        >
            <div className="flex flex-col items-center gap-[40px] text-center">
                <h1 className="text-[100px] font-medium text-center Cooper z-10">
                    Digital Performance <br />
                    <span className="Cooper relative">
                        <svg
                            className="absolute bottom-[-4px] z-[-1] h-[16px] w-[100%] left-0"
                            viewBox="0 0 271 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M268.783 18.599C123.253-1.529 2.459 13.367 1.262 13.521L.053 6.061c1.22-.155 123.176-15.227 270.02 5.089l-1.29 7.449z"
                                fill="#00EB8F"
                            />
                        </svg>
                        Solutions
                    </span>
                </h1>
                <div className="flex items-center button-div gap-[12px]">
                    <p className="text-[25px] text-[#262626] font-sans">Find out more</p>
                    <div className="px-4 button py-2 flex items-center gap-[12px] text-[16px] font-sans font-medium cursor-pointer text-[#000] transition-all leading-none rounded-[500px] border-[1.5px] border-[#B0B0B0]">
                        <svg
                            className="fill-current w-8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 15"
                        >
                            <path d="M29.565 7.029l-7.026 7.027-.79-.798 5.621-5.626a8.771 8.771 0 01-.014-.048c-.697-.002-1.394 0-2.091-.001H0V6.477h27.35l.022-.041-5.63-5.63.79-.806 7.033 7.029z"></path>
                        </svg>
                    </div>
                </div>
                <img
                    src="/images/hero1.webp"
                    className={`z-[0] select-none w-[450px] h-[670px] absolute left-[160px] transition-all duration-500 ease-in-out hover:-translate-y-3`}
                    style={{
                        top: `${140 + clampedScrollPosition}px`,
                    }}
                    alt=""
                    draggable="false"
                />
                <img
                    src="/images/hero-2.webp"
                    className="z-[0] select-none w-[260px] h-[220px] absolute top-[120px] right-[430px] transition-all duration-1000 hover:-translate-y-3"
                    alt=""
                    draggable="false"
                />
                <img
                    src="/images/hero-3.webp"
                    className="z-[0] select-none w-[360px] absolute bottom-[60px] right-[160px] transition-all duration-1000 hover:-translate-y-3"
                    alt=""
                    draggable="false"
                />
            </div>
        </div>
    );
};

export default HeroSection;
