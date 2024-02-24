import Layout from "@/components/shared/Layout";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import { IoFilter } from "react-icons/io5";
import { FaThumbsUp, FaShare } from "react-icons/fa";
import { BsReply, BsShare } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
const index = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState("");
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [replyText, setReplyText] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [rating, setRating] = useState(0);
    const { isLoggedIn, login, logout } = useAuth();
    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };
    const redirectIfNotLoggedIn = () => {
        if (!isLoggedIn) {
            router.push("/login");
        }
    };
    const handlePostReviewClick = () => {
        if (!isLoggedIn) {
            console.log("User not logged in");
            redirectIfNotLoggedIn();
        } else {
            console.log("User logged in");
            router.push("/book-demo");
        }
    };
    const ratings = [
        { rating: 5, count: 77 },
        { rating: 4, count: 20 },
        { rating: 3, count: 15 },
        { rating: 2, count: 10 },
        { rating: 1, count: 5 },
    ];
    const totalRatings = ratings.reduce((total, { count }) => total + count, 0);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const [selectedOption2, setSelectedOption2] = useState("relevance");

    const handleSortChange = (event) => {
        const value = event.target.value;
        setSelectedOption2(value);
        console.log("Sorting by:", value);
    };
    const [isUseful, setIsUseful] = useState({});

    const handleUsefulClick = (index) => {
        setIsUseful(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    // const handleReplyClick = () => {
    //     setShowReplyInput(true);
    // };

    const replyData = [
        {
            img: "/images/men.jpeg",
        },
        {
            img: "/images/review1.jpeg",
        },
        {
            img: "/images/review2.jpeg",
        },
    ];
    const [activeReplyIndex, setActiveReplyIndex] = useState(null);
    const handleReplySubmit = () => {
        setReplyText("");
        setActiveReplyIndex(false);
    };
    const handleReplyClick = (index) => {
        setActiveReplyIndex(index);
    };

    return (
        <div>
            <Layout>
                <div className='flex flex-col justify-center items-center pt-32 2xl:pt-48'>
                    <h1 className='text-[40px] font-[700] text-white'>
                        Reviews
                    </h1>
                    <p className='text-white font-[500] text-[18px] text-center'>
                        Company reviews, Course review, Internship
                    </p>
                </div>
            </Layout>
            <div className='bg-[#F0EBCE38] pt-16'>
                <Wrapper>
                    <div className="w-full bg-white p-2 md:p-5 rounded-md border border-[#D0D0D0]">
                        <div className="flex md:flex-row flex-col md:justify-between items-center gap-3">
                            <div className=" flex gap-5">
                                <Image
                                    src={'/images/top1.png'}
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="w-[80px] h-[80px] md:w-[159px] md:h-[146px] md:object-cover "
                                />
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-[24px] font-[600]"> Data Science</h1>
                                    <p>Acmegrade</p>
                                    <div className="flex items-center gap-2  text-[10px] text-[#777] md:text-[16px] ">
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
                                        <p className="text-primary-text-color">4.9</p>
                                        <p className="">(345 Reviews)</p>
                                    </div>
                                    <button className="max-w-[179px] flex bg-light-green mt-2 py-2 px-2 rounded-md  gap-1 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="15"
                                            viewBox="0 0 13 15"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.77273 10.9091L2.04545 8.18182L3.00682 7.22045L4.77273 8.97955L9.26591 4.48636L10.2273 5.45455M6.13636 0L0 2.72727V6.81818C0 10.6023 2.61818 14.1409 6.13636 15C9.65455 14.1409 12.2727 10.6023 12.2727 6.81818V2.72727L6.13636 0Z"
                                                fill="#67E776"
                                            />
                                        </svg>
                                        <p>Verified Company</p>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={handlePostReviewClick}
                                    className="bg-primary-text-color text-black rounded-md w-[173px] h-[50px]"
                                >
                                    Book a Demo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-7 pb-10 mt-10">
                        <div className="flex justify-start flex-col  items-start  ">
                            <div className="bg-white overflow-hidden w-full md:w-full h-[80px] flex md:justify-between items-center rounded-md px-3 md:px-5 border border-[#D0D0D0]">
                                <div className="flex items-center gap-3 md:gap-10">
                                    <Image
                                        src={"/images/men.jpeg"}
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="w-[40px] object-cover rounded-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Write a review"
                                        className="border-none focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <div className="ml-[-6rem] md:ml-0 star-rating text-[16px] md:text-[26px]">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                className={`star ${rating >= star ? "filled" : ""}`}
                                                onClick={() => handleStarClick(star)}
                                            >
                                                &#9733;
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col md:items-center gap-10 mt-7">
                                <label className=" flex  md:items-center radio-label">
                                    <input
                                        type="radio"
                                        value="option1"
                                        checked={selectedOption === "option1"}
                                        onChange={handleOptionChange}
                                        className={`mr-2 w-[18px] h-[18px] radio-input `}
                                    />
                                    Bigenner Level Course
                                </label>
                                <label className=" flex items-center radio-label">
                                    <input
                                        type="radio"
                                        value="option2"
                                        checked={selectedOption === "option2"}
                                        onChange={handleOptionChange}
                                        className={`mr-2 w-[18px] h-[18px] radio-input `}
                                    />
                                    Advance Level Course
                                </label>
                                <label className=" flex items-center radio-label">
                                    <input
                                        type="radio"
                                        value="option3"
                                        checked={selectedOption === "option3"}
                                        onChange={handleOptionChange}
                                        className={`mr-2 w-[18px] h-[18px] radio-input `}
                                    />
                                    Internship Program{" "}
                                </label>
                                <label className=" flex items-center radio-label">
                                    <input
                                        type="radio"
                                        value="option4"
                                        checked={selectedOption === "option4"}
                                        onChange={handleOptionChange}
                                        className={`mr-2 w-[18px] h-[18px] radio-input `}
                                    />
                                    Placement{" "}
                                </label>
                            </div>
                            <button className="bg-primary-text-color text-[18px] font-[500] mt-10 text-black rounded-md w-[130px] h-[50px]">
                                Submit
                            </button>
                            <div className="w-full px-3 py-5 flex flex-col bg-white border border-[#D0D0D0] mt-5 rounded-md">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-[24px] font-[600]">Reviews</p>
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
                                    <p className="text-[24px] font-[400]">4.9</p>
                                </div>
                                <p>4,6787 Total</p>
                                <div className="mt-2">
                                    {ratings.map((rating) => {
                                        const percentage = (
                                            (rating.count / totalRatings) *
                                            100
                                        ).toFixed(1);

                                        return (
                                            <div
                                                key={rating.rating}
                                                className="flex items-center mt-7 space-x-6 mb-4"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-8 w-8"
                                                />
                                                <div className="flex-grow">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-[16px]">
                                                            {rating.rating}-Star
                                                        </span>
                                                        <div className="w-[45%] md:w-[80%] bg-[#D0D0D0] rounded-full ">
                                                            <div
                                                                className="h-[10px] bg-black rounded-full"
                                                                style={{ width: `${percentage}%` }}
                                                            />
                                                        </div>
                                                        <span className="pl-3">{percentage}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-between items-center mt-5">
                                    <div className="relative inline-block">
                                        <div className="  rounded-md mx-auto p-[1px]">
                                            <button
                                                className=" bg-white flex border border-black   justify-center items-center gap-3 px-2 md:w-[140px] h-[50px] rounded-md"
                                                onClick={toggleDropdown}
                                            >
                                                Filter
                                                <IoFilter size={20} className="" />
                                            </button>
                                            {isDropdownOpen && (
                                                <div className="absolute top-[100%] w-full py-5 z-10 left-0 mt-2 px-2 bg-white   rounded-[6px] shadow">
                                                    <div className="flex flex-col justify-start items-start px-3 gap-3 ">
                                                        <button
                                                            onClick={toggleDropdown}
                                                            className=" text-[16px] font-[500] hover:dark:text-[#2CD880]  hover:text-[#2CD880] transition-all duration-200 ease-in"
                                                        >
                                                            Newest
                                                        </button>
                                                        <button
                                                            onClick={toggleDropdown}
                                                            className=" text-[16px] font-[500] hover:dark:text-[#2CD880] hover:text-[#2CD880] transition-all duration-200 ease-in"
                                                        >
                                                            Oldest
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-gray-600">Sort:</span>
                                        <select
                                            className="md:px-6 py-3 border focus:outline-none border-black rounded-md"
                                            value={selectedOption2}
                                            onChange={handleSortChange}
                                        >
                                            <option value="relevance">Most Relevant</option>
                                            <option value="newest">Newest</option>
                                            <option value="oldest">Oldest</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {replyData.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full flex flex-col bg-white border border-[#D0D0D0] mt-8 py-5 px-6 rounded-md"
                                >
                                    <div className="flex gap-3 border-b">
                                        <Image
                                            src={item.img}
                                            alt=""
                                            width={500}
                                            height={500}
                                            className="w-[50px] h-[50px] rounded-full"
                                        />
                                        <div className="flex flex-col justify-start items-start ">
                                            <p className="font-[500]">James Williams</p>
                                            <div className="flex flex-row items-center gap-3 text-[#777]">
                                                <p> 2 reviews</p>
                                                <div className="flex items-center gap-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="12"
                                                        height="14"
                                                        viewBox="0 0 12 14"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M10.3572 5.5C10.3572 4.30653 9.88307 3.16193 9.03916 2.31802C8.19524 1.47411 7.05065 1 5.85718 1C4.6637 1 3.51911 1.47411 2.6752 2.31802C1.83128 3.16193 1.35718 4.30653 1.35718 5.5C1.35718 7.346 2.83418 9.752 5.85718 12.634C8.88018 9.752 10.3572 7.346 10.3572 5.5ZM5.85718 14C2.19018 10.667 0.357178 7.833 0.357178 5.5C0.357178 4.04131 0.936641 2.64236 1.96809 1.61091C2.99954 0.579463 4.39849 0 5.85718 0C7.31587 0 8.71482 0.579463 9.74627 1.61091C10.7777 2.64236 11.3572 4.04131 11.3572 5.5C11.3572 7.833 9.52418 10.667 5.85718 14Z"
                                                            fill="#777777"
                                                        />
                                                        <path
                                                            d="M5.85718 7C6.255 7 6.63653 6.84196 6.91784 6.56066C7.19914 6.27936 7.35718 5.89782 7.35718 5.5C7.35718 5.10218 7.19914 4.72064 6.91784 4.43934C6.63653 4.15804 6.255 4 5.85718 4C5.45935 4 5.07782 4.15804 4.79652 4.43934C4.51521 4.72064 4.35718 5.10218 4.35718 5.5C4.35718 5.89782 4.51521 6.27936 4.79652 6.56066C5.07782 6.84196 5.45935 7 5.85718 7ZM5.85718 8C5.19414 8 4.55825 7.73661 4.08941 7.26777C3.62057 6.79893 3.35718 6.16304 3.35718 5.5C3.35718 4.83696 3.62057 4.20107 4.08941 3.73223C4.55825 3.26339 5.19414 3 5.85718 3C6.52022 3 7.1561 3.26339 7.62494 3.73223C8.09379 4.20107 8.35718 4.83696 8.35718 5.5C8.35718 6.16304 8.09379 6.79893 7.62494 7.26777C7.1561 7.73661 6.52022 8 5.85718 8Z"
                                                            fill="#777777"
                                                        />
                                                    </svg>
                                                    <p>Mumbai</p>
                                                </div>
                                            </div>
                                            <div className=" py-3"></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-row items-center my-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="129"
                                                height="25"
                                                viewBox="0 0 129 25"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11.7392 2.34164C11.9786 1.60459 13.0214 1.60459 13.2608 2.34164L15.1268 8.0845C15.2339 8.41412 15.5411 8.63729 15.8877 8.63729H21.9261C22.701 8.63729 23.0233 9.62898 22.3963 10.0845L17.5111 13.6338C17.2307 13.8375 17.1134 14.1986 17.2205 14.5282L19.0865 20.2711C19.326 21.0081 18.4824 21.621 17.8554 21.1655L12.9702 17.6162C12.6898 17.4125 12.3102 17.4125 12.0298 17.6162L7.1446 21.1655C6.51763 21.621 5.67405 21.0081 5.91353 20.2711L7.7795 14.5282C7.8866 14.1986 7.76927 13.8375 7.48888 13.6338L2.60371 10.0845C1.97674 9.62898 2.29896 8.63729 3.07394 8.63729H9.11234C9.45892 8.63729 9.76609 8.41412 9.87319 8.0845L11.7392 2.34164Z"
                                                    fill="#67E776"
                                                />
                                                <path
                                                    d="M86.7392 2.34164C86.9786 1.60459 88.0214 1.60459 88.2608 2.34164L90.1268 8.0845C90.2339 8.41412 90.5411 8.63729 90.8877 8.63729H96.9261C97.701 8.63729 98.0233 9.62898 97.3963 10.0845L92.5111 13.6338C92.2307 13.8375 92.1134 14.1986 92.2205 14.5282L94.0865 20.2711C94.326 21.0081 93.4824 21.621 92.8554 21.1655L87.9702 17.6162C87.6898 17.4125 87.3102 17.4125 87.0298 17.6162L82.1446 21.1655C81.5176 21.621 80.674 21.0081 80.9135 20.2711L82.7795 14.5282C82.8866 14.1986 82.7693 13.8375 82.4889 13.6338L77.6037 10.0845C76.9767 9.62898 77.299 8.63729 78.0739 8.63729H84.1123C84.4589 8.63729 84.7661 8.41412 84.8732 8.0845L86.7392 2.34164Z"
                                                    fill="#67E776"
                                                />
                                                <path
                                                    d="M115.739 2.34164C115.979 1.60459 117.021 1.60459 117.261 2.34164L119.127 8.0845C119.234 8.41412 119.541 8.63729 119.888 8.63729H125.926C126.701 8.63729 127.023 9.62898 126.396 10.0845L121.511 13.6338C121.231 13.8375 121.113 14.1986 121.221 14.5282L123.086 20.2711C123.326 21.0081 122.482 21.621 121.855 21.1655L116.97 17.6162C116.69 17.4125 116.31 17.4125 116.03 17.6162L111.145 21.1655C110.518 21.621 109.674 21.0081 109.914 20.2711L111.779 14.5282C111.887 14.1986 111.769 13.8375 111.489 13.6338L106.604 10.0845C105.977 9.62898 106.299 8.63729 107.074 8.63729H113.112C113.459 8.63729 113.766 8.41412 113.873 8.0845L115.739 2.34164Z"
                                                    fill="#67E776"
                                                />
                                                <path
                                                    d="M36.7392 2.34164C36.9786 1.60459 38.0214 1.60459 38.2608 2.34164L40.1268 8.0845C40.2339 8.41412 40.5411 8.63729 40.8877 8.63729H46.9261C47.701 8.63729 48.0233 9.62898 47.3963 10.0845L42.5111 13.6338C42.2307 13.8375 42.1134 14.1986 42.2205 14.5282L44.0865 20.2711C44.326 21.0081 43.4824 21.621 42.8554 21.1655L37.9702 17.6162C37.6898 17.4125 37.3102 17.4125 37.0298 17.6162L32.1446 21.1655C31.5176 21.621 30.674 21.0081 30.9135 20.2711L32.7795 14.5282C32.8866 14.1986 32.7693 13.8375 32.4889 13.6338L27.6037 10.0845C26.9767 9.62898 27.299 8.63729 28.0739 8.63729H34.1123C34.4589 8.63729 34.7661 8.41412 34.8732 8.0845L36.7392 2.34164Z"
                                                    fill="#67E776"
                                                />
                                                <path
                                                    d="M61.7392 2.34164C61.9786 1.60459 63.0214 1.60459 63.2608 2.34164L65.1268 8.0845C65.2339 8.41412 65.5411 8.63729 65.8877 8.63729H71.9261C72.701 8.63729 73.0233 9.62898 72.3963 10.0845L67.5111 13.6338C67.2307 13.8375 67.1134 14.1986 67.2205 14.5282L69.0865 20.2711C69.326 21.0081 68.4824 21.621 67.8554 21.1655L62.9702 17.6162C62.6898 17.4125 62.3102 17.4125 62.0298 17.6162L57.1446 21.1655C56.5176 21.621 55.674 21.0081 55.9135 20.2711L57.7795 14.5282C57.8866 14.1986 57.7693 13.8375 57.4889 13.6338L52.6037 10.0845C51.9767 9.62898 52.299 8.63729 53.0739 8.63729H59.1123C59.4589 8.63729 59.7661 8.41412 59.8732 8.0845L61.7392 2.34164Z"
                                                    fill="#67E776"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="13"
                                                height="15"
                                                viewBox="0 0 13 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M4.77273 10.9091L2.04545 8.18182L3.00682 7.22045L4.77273 8.97955L9.26591 4.48636L10.2273 5.45455M6.13636 0L0 2.72727V6.81818C0 10.6023 2.61818 14.1409 6.13636 15C9.65455 14.1409 12.2727 10.6023 12.2727 6.81818V2.72727L6.13636 0Z"
                                                    fill="#67E776"
                                                />
                                            </svg>
                                            <p className="">Verified</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 flex-col justify-start items-start pb-7 border-b">
                                        <p className="text-[18px] font-[500]">
                                            Sed ut perspiciatis unde omnis iste
                                        </p>
                                        <p>
                                            Course Name: "Advanced Web Development: Mastering Modern
                                            Technologies" I recently had the pleasure of taking the
                                            "Advanced Web Development: Mastering Modern Technologies"
                                            course, and I must say, it exceeded my expectations in
                                            every way. This comprehensive and hands-on course provided
                                            me with invaluable insights into the world of web
                                            development and equipped me with the latest tools and
                                            technologies to build cutting-edge websites and web
                                            applications.
                                        </p>
                                        <div className="flex gap-2 items-center">
                                            <p className="text-[16px] md:text-[18px] font-[500]">
                                                Date of experience:
                                            </p>
                                            <p className="text-[16px] md:text-[18px] font-[400] text-[#777]">
                                                July 12 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-4 items-center">
                                        <div className="flex items-center space-x-4">
                                            <div
                                                className="flex items-center space-x-1 cursor-pointer"
                                                onClick={() => handleUsefulClick(index)}
                                            >
                                                {isUseful[index] ? (
                                                    <div className="flex items-center gap-1">
                                                        <FaThumbsUp className="text-green-500" />
                                                        <p className="text-[#777]">Usefull</p>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-1">
                                                        <BiLike className="text-[#777]" />
                                                        <p className="text-[#777]">Usefull</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="cursor-pointer flex items-center gap-2">
                                                <BsShare className="text-[#777]" />
                                                <p className="text-[#777]">Share</p>
                                            </div>
                                            <div
                                                className="cursor-pointer md:flex hidden items-center gap-2"
                                                onClick={() => handleReplyClick(index)}
                                            >
                                                <BsReply size={20} className="text-[#777]" />
                                                <p className="text-[#777]">Reply</p>
                                            </div>
                                            {activeReplyIndex === index && (
                                                <div className=" md:flex  hidden gap-2">
                                                    <input
                                                        type="text"
                                                        value={replyText}
                                                        onChange={(e) => setReplyText(e.target.value)}
                                                        className="border focus:outline-none rounded-md py-2 px-6 w-full"
                                                        placeholder="Your reply..."
                                                    />
                                                    <button
                                                        onClick={handleReplySubmit}
                                                        className="bg-primary-text-color text-black px-6 py-2 rounded-md"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className="pt-4 flex flex-col w-full border-l-8 rounded-md border-primary-text-color mt-8"
                                        style={{ background: "rgba(246, 246, 201, 0.44)" }}
                                    >
                                        <div className="px-5 flex gap-3 items-center ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="15"
                                                viewBox="0 0 18 15"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11 11V15L18 8L11 1V5.1C6 5.1 2.5 3.5 0 0C1 5 4 10 11 11Z"
                                                    fill="#777777"
                                                />
                                            </svg>
                                            <p className="text-[18px] font-[500]">
                                                Reply from John Doe
                                            </p>
                                        </div>
                                        <p className="pl-12 pb-10 pt-3 pr-10">
                                            Thank you so much for the glowing review. we are thrilled
                                            to hear about you course experience.
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="flex justify-start items-start mt-5 md:mt-0"></div>
                        <div className="p-5 bg-white rounded-md border  w-full h-[555px] md:w-[1600px]">
                            <div className="flex justify-between items-center">
                                <p className="pb-3 pt-3 mb-2 text-[24px] font-[500]">Reviews</p>
                                <button className="text-primary-text-color">See All</button>
                            </div>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-[16px] font-[400] text-[#2C272E] ">
                                    Claimed Profile
                                </p>
                            </div>
                            <p className="border-b py-[6px]"></p>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-[16px] font-[400] text-[#2C272E] ">
                                    Internship
                                </p>
                            </div>
                            <p className="border-b py-[6px]"></p>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-[16px] font-[400] text-[#2C272E] ">
                                    Pays for extra features
                                </p>
                            </div>
                            <p className="border-b py-[6px]"></p>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-[16px] font-[400] text-[#2C272E] ">
                                    Replied to 60% of negative reviews
                                </p>
                            </div>
                            <p className="border-b py-[6px]"></p>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-[16px] font-[400] text-[#2C272E] ">
                                    replied negative review in {"<"} i week
                                </p>
                            </div>
                            <p className="border-b py-[6px]"></p>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-[16px] font-[400] text-[#2C272E] ">
                                    Claimed Profile
                                </p>
                            </div>
                            <p className="border-b py-[6px]"></p>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-[16px] font-[400] text-[#2C272E] ">
                                    Claimed Profile
                                </p>
                            </div>
                            <p className="border-b py-[6px]"></p>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-[16px] font-[400] text-[#2C272E] ">
                                    Claimed Profile
                                </p>
                            </div>
                            <p className="border-b py-[6px]"></p>
                        </div>
                    </div>

                </Wrapper>

            </div>

        </div>
    )
}

export default index