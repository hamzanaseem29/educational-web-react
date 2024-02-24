import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineBusinessCenter,
} from "react-icons/md";

const InternshipCard = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const data = [
    {
      id: 1,
      img: "/images/google.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
    },
    {
      id: 2,
      img: "/images/jio.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",

    },
    {
      id: 3,
      img: "/images/rio.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",

    },
    {
      id: 4,
      img: "/images/tata.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",

    },
    {
      id: 5,
      img: "/images/bank.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",

    },
    {
      id: 6,
      img: "/images/reliance.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",

    },
    {
      id: 7,
      img: "/images/indbank.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
    },
    {
      id: 8,
      img: "/images/reliance.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",

    },
  ];
  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };
  const rotationDegree = isDropdownVisible ? 180 : 0;

  const iconStyle = {
    transform: `rotate(${rotationDegree}deg)`,
    transition: "transform 0.3s ease", // Add a smooth transition
  };



  const [dropdownVisibilities, setDropdownVisibilities] = useState(
    Array(data.length).fill(false)
  );

  const toggleDropdown2 = (index) => {
    const newVisibilities = [...dropdownVisibilities];
    newVisibilities[index] = !newVisibilities[index];
    setDropdownVisibilities(newVisibilities);
  };
  const itemsPerPage = 4;
  const totalPosts = data.length;
  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      window.scrollTo(0, 500);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      window.scrollTo(0, 500);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 500);
    }
  };

  const posts = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = data.length;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (totalPages - endPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };
  return (
    <div className="flex gap-5 flex-col justify-center items-center mb-10">
      {data.map((item, index) => (
        <div key={item.id}>
          <div className="md:w-[787px]  w-[full] bg-white h-auto p-2 md:px-5 md:pt-5 border rounded-t-md border-[#D0D0D0]">
            <div className="flex md:justify-between items-start w-full">
              <div className="flex gap-2 md:gap-5">
                <Image
                  src={item.img}
                  alt=""
                  width={500}
                  height={500}
                  className="w-[55px] h-[55px] md:w-[97px] md:h-[97px] object-contain"
                />
                <div className="flex flex-col md:gap-1">
                  <p className="text-[14px] pr-9 md:pr-0 font-[500] md:text-[24px] md:font-[600]">
                    {item.title}
                  </p>
                  <div className="flex gap-2 mt-1 md:mt-0  md:gap-3">
                    <Link href={'/company-details'}>
                    <div className="gap-1 flex justify-center items-center">
                      <MdOutlineBusinessCenter
                        size={22}
                        className="text-[#777]"
                      />
                      <p className="text-[12px] md:text-[14px] text-[#777] font-[400]">
                        {item.company}
                      </p>
                    </div>
                    
                    </Link>
                    <div className="gap-1 flex justify-center absolute md:flex  ml-20 md:ml-[5.5rem]  md:w-auto items-center">
                      <IoCalendarOutline size={22} className="text-[#777]" />
                      <p className="text-[12px] md:text-[14px] text-[#777] font-[400]">
                        {item.period}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:justify-between">
                <Link href={`/internships/${item.id}`} >

                  <button className="rounded-md text-[12px]  md:text-[16px] w-[95px] md:w-[162px] h-[40px] bg-primary-text-color">
                    {item.buttontext}
                  </button>
                </Link>
                <div className="flex items-center gap-2 mt-16">
                  <Image src={'/images/coin.png'} width={200} height={200} alt="" className="md:w-[32px] w-[20px] md:h-[32px]" />
                  <p className="text-[12px] md:text-[16px]">
                    10 Coins
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-t mt-4 ">
              <div className=" ">
                <div className="">
                  <Link href={`/internships/${item.id}`} >
                    <button className="border mt-3 py-1 px-2 md:py-2 md:px-4 border-primary-text-color rounded-md text-primary-text-color">
                      View Program
                    </button>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      ))}
      {/* Pagination */}
      <div className="flex mx-auto justify-center items-center mt-[3rem] gap-3 ">
        <button
          onClick={handlePrevious}
          className={` flex justify-center items-center h-[42px] w-[42px] rounded ${currentPage === 1
            ? "bg-transparent border border-[#D9D9D9]"
            : "bg-[#D9D9D9]"
            }`}
        >
          <MdKeyboardArrowLeft
            size={20}
            className={` ${currentPage === 1 ? "text-[#D9D9D9]" : "text-white"
              }`}
          />
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-[42px] h-[42px] rounded ${currentPage === page
              ? "border border-primary-text-color text-black"
              : "bg-transparent border border-[#D9D9D9] text-black"
              }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNext}
          className={`flex justify-center items-center h-[42px] w-[42px] rounded ${currentPage === totalPages
            ? "bg-transparent border border-[#D9D9D9]"
            : "bg-[#D9D9D9]"
            }`}
        >
          <MdKeyboardArrowRight
            size={20}
            className={` ${currentPage === totalPages ? "text-[#D9D9D9]" : "text-white"
              }`}
          />
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;
