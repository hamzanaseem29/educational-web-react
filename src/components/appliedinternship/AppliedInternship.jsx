import Image from 'next/image';
import React, { useState } from 'react'
import { IoCalendarOutline } from 'react-icons/io5';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineBusinessCenter } from 'react-icons/md';

const AppliedInternship = () => {
  const data = [
    {
      img: "/images/google.png",
      title: "Commercial Industrial Placement",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
      applyDate: "Applied on 10 Aug, 2023",
      status: "Not Selected",
      color: "rgba(235, 89, 89, 0.09)",
      borderColor: "#E76767",
      textColor: "#E76767",

    },
    {
      img: "/images/jio.png",
      title: "Commercial Industrial Placement",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
      applyDate: "Applied on 10 Aug, 2023",
      status: "Applied",
      color: "rgba(60, 94, 215, 0.15)",
      borderColor: "#3C5ED7",
      textColor: "#3C5ED7",
    },
    {
      img: "/images/rio.png",
      title: "Commercial Industrial Placement",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
      applyDate: "Applied on 10 Aug, 2023",
      status: "Application Viewed",
      color: "rgba(77, 195, 22, 0.06)",
      borderColor: "#54B435",
      textColor: "#54B435",
    },
    {
      img: "/images/tata.png",
      title: "Commercial Industrial Placement",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
      applyDate: "Applied on 10 Aug, 2023",
      status: "Not Selected",
      color: "rgba(235, 89, 89, 0.09)",
      borderColor: "#E76767",
      textColor: "#E76767",
    },
    {
      img: "/images/bank.png",
      title: "Commercial Industrial Placement",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
      applyDate: "Applied on 10 Aug, 2023",
      status: "Not Selected",
      color: "rgba(235, 89, 89, 0.09)",
      borderColor: "#E76767",
      textColor: "#E76767",
    },
    {
      img: "/images/reliance.png",
      title: "Commercial Industrial Placement",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
      applyDate: "Applied on 10 Aug, 2023",
      status: "Not Selected",
      color: "rgba(235, 89, 89, 0.09)",
      borderColor: "#E76767",
      textColor: "#E76767",
    },
    {
      img: "/images/reliance.png",
      title: "Commercial Industrial Placement",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
      applyDate: "Applied on 10 Aug, 2023",
      status: "Not Selected",
      color: "rgba(235, 89, 89, 0.09)",
      borderColor: "#E76767",
      textColor: "#E76767",
    },
    {
      img: "/images/bank.png",
      title: "Commercial Industrial Placement",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
      applyDate: "Applied on 10 Aug, 2023",
      status: "Not Selected",
      color: "rgba(235, 89, 89, 0.09)",
      borderColor: "#E76767",
      textColor: "#E76767",
    },
  ];
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
    <div className='pb-20'>
      <div className='flex flex-col text-center pt-20 pb-10 justify-center items-center'>
        <h1 className='text-[40px] font-[700]'>
          Applied Internships
        </h1>
        <p className='max-w-[534px] text-[13px] py-5'>
          Sed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus error sit
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-7">
          {data.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col justify-start w-[330px] md:w-[605px] h-auto pb-2 border bg-white border-[#D0D0D0] rounded-t-md"
            >
              <div className="flex  gap-3 py-5 px-3 md:px-5">
                <Image
                  src={item.img}
                  alt=""
                  width={500}
                  height={500}
                  className="h-[97px] w-[97px] rounded-md object-cover"
                />

                <div className="flex flex-col md:gap-2">
                  <p className="text-[16px] font-[500]">{item.title}</p>
                  <div className="flex md:flex-row flex-col gap-2  md:gap-3">
                    <div className="gap-1 flex md:justify-center items-center">
                      <MdOutlineBusinessCenter
                        size={22}
                        className="text-[#777]"
                      />
                      <p className="text-[14px] text-[#777] font-[400]">
                        {item.company}
                      </p>
                    </div>
                    <div className="gap-1 flex justify-center items-center">
                      <IoCalendarOutline size={22} className="text-[#777]" />
                      <p className="text-[14px] text-[#777] font-[400]">
                        {item.period}
                      </p>
                    </div>
                  </div>
                  <p className='text-[14px] text-[#777] font-[400]'>
                    {item.applyDate}
                  </p>
                </div>
              </div>

              <p className="border-t  border-[#D0D0D0] w-full mb-3">
              </p>
              <div className="flex items-center gap-3 mx-5 justify-center md:justify-between ">
                <button style={{ background: item.color, border: `1px solid ${item.textColor}`, color: item.textColor }} className={` rounded-md min-w-[150px] md:w-[162px] h-[40px]`}>
                  {item.status}
                </button>
                <button className="bg-transparent border border-[#777]  text-[#777] rounded-md min-w-[120px] md:min-w-[162px] h-[40px]">
                  Update Status
                </button>

              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex mx-auto justify-center items-center mt-[3rem] gap-3 ">

          <button
            onClick={handlePrevious}
            className={` flex justify-center items-center h-[42px] w-[42px] rounded ${currentPage === 1
              ? "bg-transparent border border-[#D9D9D9]"
              : "bg-[#D9D9D9]"
              }`}
          >
            <MdKeyboardArrowLeft size={20} className={` ${currentPage === 1
              ? "text-[#D9D9D9]"
              : "text-white"
              }`} />
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
            <MdKeyboardArrowRight size={20} className={` ${currentPage === totalPages
              ? "text-[#D9D9D9]"
              : "text-white"
              }`} />
          </button>

        </div>
      </div>
    </div>
  )
}

export default AppliedInternship