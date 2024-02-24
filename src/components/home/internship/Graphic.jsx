import Image from "next/image";
import React from "react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination]);
const Graphic = () => {
    const data = [
        {
            img: "/images/indbank.png",
            title: "Commercial Industrial Placement",
            bag: "/images/briefcase.png",
            company: "Google",
            calender: "/images/calendar.png",
            period: "Internship (10 Months +)",
            coin: "/images/coin.png",
            coinNumber: "10 Coins",
        },
        {
            img: "/images/tata.png",
            title: "Commercial Industrial Placement",
            bag: "/images/briefcase.png",
            company: "Google",
            calender: "/images/calendar.png",
            period: "Internship (10 Months +)",
            coin: "/images/coin.png",
            coinNumber: "10 Coins",
        },
        {
            img: "/images/course1.png",
            title: "Commercial Industrial Placement",
            bag: "/images/briefcase.png",
            company: "Google",
            calender: "/images/calendar.png",
            period: "Internship (10 Months +)",
            coin: "/images/coin.png",
            coinNumber: "10 Coins",
        },
    ];
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                {data.map((item, index) => (
                  <div
                  key={index}
                  className=" flex flex-col justify-start w-[330px] md:w-[393px] h-auto pb-2 border border-[#D0D0D0] rounded-t-md"
              >
                  <div className="flex  gap-3 py-5 px-5">
                      <Image
                          src={item.img}
                          alt=""
                          width={500}
                          height={500}
                          className="h-[53px] w-[53px] rounded-md object-cover"
                      />

                      <div className="flex flex-col md:gap-2">
                          <p className="text-[16px] font-[500]">{item.title}</p>
                          <div className="flex gap-2  md:gap-3 mt-2 md:mt-0">
                              <div className="gap-1 flex justify-center items-center">
                                  <MdOutlineBusinessCenter

                                      className="text-[#777] w-[18px] h-[18px] md:h-[22px] md:w-[22px]"
                                  />
                                  <p className="md:text-[14px] text-[12px] text-[#777] font-[400]">
                                      {item.company}
                                  </p>
                              </div>
                              <div className="md:gap-1 gap-[2px] absolute md:ml-[5.5rem] ml-[71px] flex md:flex justify-center items-center">
                                  <IoCalendarOutline className="text-[#777] w-[18px] h-[18px] md:h-[22px] md:w-[22px]" />
                                  <p className="md:text-[14px] text-[12px] text-[#777] font-[400]">
                                      {item.period}
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="flex gap-2  px-5 items-center mt-1 mb-6">
                      <Image src={item.coin} alt="" width={500} height={500} className="w-[25px] h-[25px]" />
                      <p className="md:text-[16px] text-[14px]">
                          {item.coinNumber}
                      </p>
                  </div>
                  <p className="border-t  border-[#D0D0D0] w-full mb-3">
                  </p>
                  <div className="flex items-center gap-3 justify-center">
                      <Link href={"/internships"}>
                          <button className="bg-primary-text-color text-black rounded-md w-[150px] md:w-[173px] h-[50px]">
                              Apply Now
                          </button>
                      </Link>
                      <button className="bg-transparent border border-[#777]  text-[#777] rounded-md w-[150px] md:w-[173px] h-[50px]">
                          View Program
                      </button>

                  </div>
              </div>
                ))}
            </div>
        </div>
    );
};

export default Graphic;
