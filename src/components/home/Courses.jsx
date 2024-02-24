import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`cursor-pointer  md:block hidden absolute top-[80px]  -right-5  bg-[#4E1D9A5E] p-1 rounded-md hover:bg-[#4E1D9A] transition-all duration-200 ease-linear`}
            onClick={onClick}
        >
            <MdKeyboardArrowRight
                size={25}
                className="text-[#4E1D9A] hover:text-white transition-all duration-200 ease-linear"
            />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`cursor-pointer md:block hidden absolute top-[80px] -left-12 bg-[#4E1D9A5E] p-1 rounded-md hover:bg-[#4E1D9A] transition-all duration-200 ease-linear`}
            onClick={onClick}
        >
            <MdKeyboardArrowLeft
                size={25}
                className="text-[#4E1D9A] hover:text-white transition-all duration-200 ease-linear"
            />
        </div>
    );
}

const Courses = () => {
    const data = [
        {
            img: "/images/course1.png",
            title: "Data Science",
            company: "Acmegrade",
            locIcon: "/images/calendar.png",
            location: "Mumbai,India",
            rating: "4.9",
            reviews: "(345 Reviews)",
            for: "Begginer Level Course",
            coinNumber: "View Details",
        },
        {
            img: "/images/course1.png",
            title: "Data Science",
            company: "Acmegrade",
            locIcon: "/images/calendar.png",
            location: "Mumbai,India",
            rating: "4.9",
            reviews: "(345 Reviews)",
            for: "Begginer Level Course",
            coinNumber: "View Details",
        },
        {
            img: "/images/course1.png",
            title: "Data Science",
            company: "Acmegrade",
            locIcon: "/images/calendar.png",
            location: "Mumbai,India",
            rating: "4.9",
            reviews: "(345 Reviews)",
            for: "Begginer Level Course",
            coinNumber: "View Details",
        },
        {
            img: "/images/course1.png",
            title: "Data Science",
            company: "Acmegrade",
            locIcon: "/images/calendar.png",
            location: "Mumbai,India",
            rating: "4.9",
            reviews: "(345 Reviews)",
            for: "Begginer Level Course",
            coinNumber: "View Details",
        },
        {
            img: "/images/course1.png",
            title: "Data Science",
            company: "Acmegrade",
            locIcon: "/images/calendar.png",
            location: "Mumbai,India",
            rating: "4.9",
            reviews: "(345 Reviews)",
            for: "Begginer Level Course",
            coinNumber: "View Details",
        },
    ];
    const settings = {
        dots: true,
        dotsClass: "slick-dots line-indicator",
        infinite: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
        ],
        customPaging: (i) => <div className="-mt-3 text-xs opacity-0">{i}</div>,
    };
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[32px] md:text-[40px] font-[700] mb-10">
                        Courses We Offer
                    </h1>
                    <Slider {...settings} className="w-full gap-20">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className=" flex flex-col ml-[1rem] md:ml-0 justify-start max-w-[330px] md:max-w-[393px] h-auto pb-2 border border-[#D0D0D0] rounded-t-md"
                            >
                                <div className="flex  gap-3 py-5 px-3 md:px-5">
                                    <Image
                                        src={item.img}
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="h-[53px] w-[53px] rounded-md object-cover"
                                    />

                                    <div className="flex flex-col gap-2">
                                        <p className="text-[16px] font-[500]">{item.title}</p>
                                        <div className="flex  gap-3">
                                            <div className="gap-1 flex justify-center items-center">
                                                <p className="text-[14px] text-[#777] font-[400]">
                                                    {item.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center ga-1 md:gap-2 px-3 md:px-5">
                                        <HiOutlineLocationMarker
                                            size={18}
                                            className="text-[#777]"
                                        />
                                        <p className="text-[16px] font-[400] text-[#777]">
                                            {item.location}
                                        </p>
                                    </div>
                                    <div className="flex items-center px-1 md:px-5 gap-1 md:gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                                                fill="#54B435"
                                            />
                                        </svg>
                                        <p className="text-primary-text-color">4.9</p>
                                        <p className="text-[#777]">(345 Reviews)</p>
                                    </div>
                                </div>
                                <p className="border-t  border-[#D0D0D0] w-full my-3"></p>
                                <div className="flex justify-between items-center">
                                    <ul className="list list-disc ml-9">
                                        <li className="text-[#777]">{item.for}</li>
                                    </ul>
                                    <Link href={'/best-courses'}>
                                    <p className="text-primary-text-color pr-2 md:pr-6">
                                        {item.coinNumber}
                                    </p>
                                    
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Courses;
