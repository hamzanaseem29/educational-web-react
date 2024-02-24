import Image from 'next/image'
import React, { useState } from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Reviews = () => {
    const reviewData = [
        {
            id: 1,
            status: 'Your Review is Pending..',
            img: '/images/review3.jpeg',
            name: 'James Williams',
            review: '0 Reviews',
            desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
            doeTitle: 'Date of Experience:',
            doe: 'June 23, 2023'
        },
        {
            id: 1,
            status: 'Your Review is Pending..',
            img: '/images/review4.jpeg',
            name: 'James Williams',
            review: '0 Reviews',
            desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
            doeTitle: 'Date of Experience:',
            doe: 'June 23, 2023'
        },
        {
            id: 1,
            status: 'Your Review is Pending..',
            img: '/images/review5.jpeg',
            name: 'James Williams',
            review: '0 Reviews',
            desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
            doeTitle: 'Date of Experience:',
            doe: 'June 23, 2023'
        },
        {
            id: 1,
            status: 'Your Review is Pending..',
            img: '/images/review6.jpeg',
            name: 'James Williams',
            review: '0 Reviews',
            desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
            doeTitle: 'Date of Experience:',
            doe: 'June 23, 2023'
        },
        {
            id: 1,
            status: 'Your Review is Pending..',
            img: '/images/review1.jpeg',
            name: 'James Williams',
            review: '0 Reviews',
            desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
            doeTitle: 'Date of Experience:',
            doe: 'June 23, 2023'
        },
        {
            id: 1,
            status: 'Your Review is Pending..',
            img: '/images/review2.jpeg',
            name: 'James Williams',
            review: '0 Reviews',
            desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
            doeTitle: 'Date of Experience:',
            doe: 'June 23, 2023'
        },
    ]
    const itemsPerPage = 4;
    const totalPosts = reviewData.length;
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

    const posts = reviewData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = reviewData.length;

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
        <div>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-[40px] font-[700]'>Reviews</h1>
                <p className='text-[13px] font-[400] text-center max-w-[520px]'>
                    Sed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus error sit
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10'>
                    {reviewData.map((item, index) => (
                        <div key={index} className='flex flex-col bg-white pb-3 border rounded-[5px] w-[320px] md:w-[393px]'>
                            <div className='bg-purple-700 bg-opacity-10 py-3  rounded-t-[5px] flex items-center gap-3 px-3'>
                                <p className='text-black font-[500] text-[14px]'>{item.status}</p>
                                <button className='text-[13px] font-[400] text-[#777]'>Read more</button>
                            </div>
                            <div className='flex gap-2 m-4 '>
                                <Image src={item.img} width={200} height={200} alt='' className='w-[46px] h-[46px] rounded-full' />
                                <div className='flex flex-col'>
                                    <p className='text-[16px] font-[500]'>{item.name}</p>
                                    <p className='text-[16px] text-[#777]'>{item.review}</p>
                                </div>
                            </div>
                            <div className='ml-10 mt-2 flex gap-2'>
                                <AiTwotoneStar size={22} className='text-primary-text-color' />
                                <AiTwotoneStar size={22} className='text-primary-text-color' />
                                <AiTwotoneStar size={22} className='text-primary-text-color' />
                                <AiTwotoneStar size={22} className='text-primary-text-color' />

                            </div>
                            <div >
                                <p className='py-3 px-4 text-[13px] font-[400]'>
                                    {item.desc}
                                </p>
                                <div className='flex items-center pl-4'>
                                    <p className='text-[14px] font-[500] '>
                                        {item.doeTitle}
                                    </p>
                                    <p className='text-[14px] text-[#777] font-[300]'>
                                        {item.doe}
                                    </p>
                                </div>
                            </div>
                            <p className='border-t my-4 mx-4'></p>
                            <div className='flex items-center mx-6 gap-6'>
                                <button className='flex items-center text-[#777] font-[500] gap-2 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M10.5229 2.87997L13.12 5.47712M8.79145 15H15.7172M1.86572 11.5371L1 15L4.46287 14.1343L14.4931 4.10409C14.8177 3.7794 15 3.33908 15 2.87997C15 2.42085 14.8177 1.98054 14.4931 1.65584L14.3442 1.50694C14.0195 1.18235 13.5791 1 13.12 1C12.6609 1 12.2206 1.18235 11.8959 1.50694L1.86572 11.5371Z" stroke="#777777" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Edit
                                </button>
                                <button className='flex items-center text-[#777] font-[500] gap-2 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                                        <path d="M2.33333 14C1.90556 14 1.53922 13.8476 1.23433 13.5427C0.929444 13.2378 0.777259 12.8717 0.777778 12.4444V2.33333H0V0.777778H3.88889V0H8.55555V0.777778H12.4444V2.33333H11.6667V12.4444C11.6667 12.8722 11.5142 13.2386 11.2093 13.5434C10.9044 13.8483 10.5384 14.0005 10.1111 14H2.33333ZM10.1111 2.33333H2.33333V12.4444H10.1111V2.33333ZM3.88889 10.8889H5.44444V3.88889H3.88889V10.8889ZM7 10.8889H8.55555V3.88889H7V10.8889Z" fill="#777777" />
                                    </svg>
                                    Delete
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

export default Reviews