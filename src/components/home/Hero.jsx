import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Dropdown from "./Dropdown";

export default function Hero() {

    return (
        <div className="hero-section md:h-[90vh] 2xl:h-[70vh] overflow-hidden">
            <div className="hero-overlay">
                <Wrapper>
                    {/* parent */}
                    <div className="flex md:flex-row flex-col items-center ">
                        {/* left */}
                        <div className="flex flex-col justify-center text-center md:justify-start md:text-left  ">
                            <h1 className="text-[40px] md:text-[65px] pt-[7rem] md:pt-[11rem] font-[700] text-[#fff]">
                                To be the best, <br />
                                <span className="text-primary-text-color">
                                    Choose the best.
                                </span>
                            </h1>
                            <p className="text-[18px] font-[500] text-white pt-1">Company reviews, Course review, Internship</p>
                            <div className="flex flex-col md:flex-row gap-4 items-center mt-10">
                                <div className="w-[320px] md:w-[490px] h-[64px] flex md:gap-1 relative rounded-md bg-white  border">
                                    {/* Search Icon */}
                                    <img src="/images/search.svg" alt="Search Icon" className="absolute left-4 top-1/2 transform -translate-y-1/2" />

                                    {/* Search Input */}
                                    <input type="text" placeholder="Search courses" className="pl-12 md:pl-16 md:pr-8 py-2 w-[180px] md:w-[270px] rounded-md focus:outline-none" />
                                    <p className="border-l border-[#8A8A8A]  my-2"></p>
                                    {/* Dropdown of Courses */}
                                   <Dropdown/>
                                </div>

                                <button className="bg-primary-text-color text-black font-medium rounded-md py-3 md:py-5 px-7">
                                    Search
                                </button>

                            </div>
                        </div>
                        {/* right  */}
                        <div className="">
                            <img src={'/images/hero.png'} alt="" className="md:w-[650px] top-14 hidden sm:hidden md:hidden xl:block 2xl:block mt-[2rem] md:h-[600px] md:ml-[3rem] md:absolute float-right object-cover"/>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
}
