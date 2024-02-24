import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const Card = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };
  const rotationDegree = isDropdownVisible ? 180 : 0;

  const iconStyle = {
    transform: `rotate(${rotationDegree}deg)`,
    transition: "transform 0.3s ease", // Add a smooth transition
  };

  const data = [
    {
      id: 1,
      img: "/images/coursecard1.png",
      title: "Abhilashi University",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Most Relevent",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      reviews1: [
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review1.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review2.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review3.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review4.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review1.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
      ] 
    },
    {
      id: 2,
      img: "/images/coursecard2.png",
      title: "Acharya Nagarjuna University",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Most Relevent",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      reviews1: [
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review3.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/men.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review5.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review2.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review1.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
      ] 
    },
    {
      id: 3,
      img: "/images/coursecard3.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Most Relevent",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      reviews1: [
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review3.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/men.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review5.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review2.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review1.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
      ] 
    },
    {
      id: 4,
      img: "/images/coursecard4.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Most Relevent",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      reviews1: [
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review3.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/men.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review5.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review2.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review1.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
      ] 
    },
    {
      id: 5,
      img: "/images/coursecard5.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Most Relevent",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      reviews1: [
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review3.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/men.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review5.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review2.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review1.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
      ] 
    },
    {
      id: 6,
      img: "/images/coursecard6.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Most Relevent",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      reviews1: [
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review3.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/men.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review5.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review2.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review1.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
      ] 
    },
    {
      id: 7,
      img: "/images/coursecard6.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Most Relevent",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      reviews1: [
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review3.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/men.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review5.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review2.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review1.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
      ] 
    },
    {
      id: 8,
      img: "/images/coursecard6.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Most Relevent",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      reviews1: [
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review3.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/men.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review5.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review2.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
        {
          id: 1,
          time: "2 days ago",
          image: "/images/review1.jpeg",
          content: "Sed ut perspiciatis unde omnis iste natus error sit",
        },
      ] 
    },
  ];

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
                  className="w-[40px] h-[40px] md:w-[97px] md:h-[112px] object-cover"
                />
                <div className="flex flex-col md:gap-1">
                  <p className="text-[14px] pr-9 md:pr-0 font-[500] md:text-[24px] md:font-[600]">
                    {item.title}
                  </p>
                  <p className="text-[14px] md:text-[16px] font-[400]">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.locationIcon}
                      alt=""
                      width={500}
                      height={500}
                      className="w-[10px] md:w-[15px] md:h-[20px]"
                    />
                    <p className="text-[#777] text-[13px] md:text-[16px]">
                      {item.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-[13px] text-[#777] md:text-[16px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                        fill="#67E776"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                        fill="#67E776"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                        fill="#67E776"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                        fill="#67E776"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                        fill="#67E776"
                      />
                    </svg>
                    <p className="text-primary-text-color">{item.rating}</p>
                    <p className="absolute ml-[9rem] md:ml-[10rem]">({item.reviews}) Reviews</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="text-[12px]  md:text-[16px] w-[95px] md:w-[162px] h-[40px] bg-light-green2">
                  {item.buttontext}
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-t my-2 pt-3 md:pt-5 md:pb-3">
              <div className="flex gap-1 md:gap-8 items-center ">
                <div className="flex gap-1 md:gap-5  items-center">
                  <Link href={""}>
                    <Image
                      src={"/images/world.png"}
                      alt=""
                      width={500}
                      height={500}
                      className="md:w-[25px] md:h-[25px] w-[12px]"
                    />
                  </Link>
                  <Link href={""}>
                    <Image
                      src={"/images/phone.png"}
                      alt=""
                      width={500}
                      height={500}
                      className="md:w-[25px] md:h-[25px] w-[12px]"
                    />
                  </Link>
                  <Link href={""}>
                    <Image
                      src={"/images/email.png"}
                      alt=""
                      width={500}
                      height={500}
                      className="md:w-[25px] md:h-[25px] w-[12px]"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-[0.5px]  md:gap-3 md:text-[16px] text-[#777] text-[10px]">
                  <p>{item.level}</p>
                  <p>.</p>
                  <p>{item.post}</p>
                </div>
                <div></div>
              </div>
              <div className="relative">
                <button
                  className="text-primary-text-color items-center gap-[0.5px] md:gap-3 text-[10px] flex md:text-[16px]"
                  onClick={() => toggleDropdown2(index)}
                >
                  Latest Reviews
                  <MdKeyboardArrowDown
                    size={20}
                    className={`w-[12px] md:w-[20px] rotate-icon`}
                    style={{
                      ...iconStyle,
                      transform: dropdownVisibilities[index]
                        ? "rotate(180deg)"
                        : "none",
                    }}
                  />
                </button>
              </div>
            </div>
            {dropdownVisibilities[index] && (
              <div className={`custom-scrollbar mt-2 transition-all overflow-x-scroll ${
                toggleDropdown ? "border-t  duration-300 ease-in transition-all max-h-[300px]" : "max-h-0 duration-100 "
              }`}>
                <div className=" flex gap-5 items-center  mt-2 w-[300px] md:w-full p-5">
                  {item.reviews1.map((review) => (
                    <div
                      key={review.id}
                      className="flex min-w-[260px]  flex-col gap-2 border rounded-md p-3 "
                    >
                      <p className="text-[#777]">{review.time}</p>
                      <div className="flex items-center gap-2">
                        <Image
                          src={review.image}
                          alt=""
                          width={500}
                          height={500}
                          className="h-[30px] w-[30px] rounded-full"
                        />
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                              fill="#67E776"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                              fill="#67E776"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                              fill="#67E776"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                              fill="#67E776"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                              fill="#67E776"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      {/* Pagination */}
      <div className="flex mx-auto justify-center items-center mt-[3rem] gap-3 ">
        <button
          onClick={handlePrevious}
          className={` flex justify-center items-center h-[42px] w-[42px] rounded ${
            currentPage === 1
              ? "bg-transparent border border-[#D9D9D9]"
              : "bg-[#D9D9D9]"
          }`}
        >
          <MdKeyboardArrowLeft
            size={20}
            className={` ${
              currentPage === 1 ? "text-[#D9D9D9]" : "text-white"
            }`}
          />
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-[42px] h-[42px] rounded ${
              currentPage === page
                ? "border border-primary-text-color text-black"
                : "bg-transparent border border-[#D9D9D9] text-black"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNext}
          className={`flex justify-center items-center h-[42px] w-[42px] rounded ${
            currentPage === totalPages
              ? "bg-transparent border border-[#D9D9D9]"
              : "bg-[#D9D9D9]"
          }`}
        >
          <MdKeyboardArrowRight
            size={20}
            className={` ${
              currentPage === totalPages ? "text-[#D9D9D9]" : "text-white"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
