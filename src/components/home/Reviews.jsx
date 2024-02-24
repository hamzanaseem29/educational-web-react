import React from 'react'
import Wrapper from '../shared/Wrapper'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import Image from 'next/image'
const Reviews = () => {
    const reviews = [
        {
            id: 1,
            img: '/images/review.jpeg',
            title: 'James Williams',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        },
        {
            id: 2,
            img: '/images/review1.jpeg',
            title: 'James Williams',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        },
        {
            id: 3,
            img: '/images/review2.jpeg',
            title: 'James Williams',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        },
        {
            id: 4,
            img: '/images/review3.jpeg',
            title: 'James Williams',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        },
        {
            id: 5,
            img: '/images/review.jpeg',
            title: 'James Williams',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        },
        {
            id: 6,
            img: '/images/review1.jpeg',
            title: 'James Williams',
            desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        },
    ]
    return (
        <div className='pt-20 pb-32 overflow-hidden'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-[32px] md:text-[40px] font-[700]">
                    Brows Reviews
                </h1>
            </div>
            <div className="mt-14  flex  moving gap-10">
                {reviews.map((data, id) => (
                    <div key={id} className="py-5 pl-5 flex flex-col min-w-[393px] h-[215px] rounded-[10px] border ">
                        <div className='flex gap-3'>
                            <Image src={data.img} alt='' width={200} height={200} className='w-[48px] h-[48px] rounded-full' />
                            <div className='flex flex-col '>
                                <p className='text-[16px] font-[500]'>{data.title}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="116" height="20" viewBox="0 0 116 20" fill="none">
                                    <path d="M9.23915 2.34164C9.47864 1.60459 10.5214 1.60459 10.7608 2.34164L12.0655 6.35704C12.1726 6.68666 12.4798 6.90983 12.8264 6.90983H17.0484C17.8234 6.90983 18.1456 7.90152 17.5186 8.35704L14.1029 10.8387C13.8226 11.0424 13.7052 11.4035 13.8123 11.7331L15.117 15.7485C15.3565 16.4856 14.5129 17.0985 13.8859 16.643L10.4702 14.1613C10.1898 13.9576 9.81016 13.9576 9.52977 14.1613L6.11407 16.643C5.48709 17.0985 4.64351 16.4856 4.88299 15.7485L6.18768 11.7331C6.29478 11.4035 6.17745 11.0424 5.89706 10.8387L2.48135 8.35704C1.85438 7.90152 2.1766 6.90983 2.95158 6.90983H7.17363C7.52021 6.90983 7.82737 6.68666 7.93447 6.35704L9.23915 2.34164Z" fill="#67E776" />
                                    <path d="M33.2392 2.34164C33.4786 1.60459 34.5214 1.60459 34.7608 2.34164L36.0655 6.35704C36.1726 6.68666 36.4798 6.90983 36.8264 6.90983H41.0484C41.8234 6.90983 42.1456 7.90152 41.5186 8.35704L38.1029 10.8387C37.8226 11.0424 37.7052 11.4035 37.8123 11.7331L39.117 15.7485C39.3565 16.4856 38.5129 17.0985 37.8859 16.643L34.4702 14.1613C34.1898 13.9576 33.8102 13.9576 33.5298 14.1613L30.1141 16.643C29.4871 17.0985 28.6435 16.4856 28.883 15.7485L30.1877 11.7331C30.2948 11.4035 30.1774 11.0424 29.8971 10.8387L26.4814 8.35704C25.8544 7.90152 26.1766 6.90983 26.9516 6.90983H31.1736C31.5202 6.90983 31.8274 6.68666 31.9345 6.35704L33.2392 2.34164Z" fill="#67E776" />
                                    <path d="M57.2392 2.34164C57.4786 1.60459 58.5214 1.60459 58.7608 2.34164L60.0655 6.35704C60.1726 6.68666 60.4798 6.90983 60.8264 6.90983H65.0484C65.8234 6.90983 66.1456 7.90152 65.5186 8.35704L62.1029 10.8387C61.8226 11.0424 61.7052 11.4035 61.8123 11.7331L63.117 15.7485C63.3565 16.4856 62.5129 17.0985 61.8859 16.643L58.4702 14.1613C58.1898 13.9576 57.8102 13.9576 57.5298 14.1613L54.1141 16.643C53.4871 17.0985 52.6435 16.4856 52.883 15.7485L54.1877 11.7331C54.2948 11.4035 54.1774 11.0424 53.8971 10.8387L50.4814 8.35704C49.8544 7.90152 50.1766 6.90983 50.9516 6.90983H55.1736C55.5202 6.90983 55.8274 6.68666 55.9345 6.35704L57.2392 2.34164Z" fill="#67E776" />
                                    <path d="M81.2392 2.34164C81.4786 1.60459 82.5214 1.60459 82.7608 2.34164L84.0655 6.35704C84.1726 6.68666 84.4798 6.90983 84.8264 6.90983H89.0484C89.8234 6.90983 90.1456 7.90152 89.5186 8.35704L86.1029 10.8387C85.8226 11.0424 85.7052 11.4035 85.8123 11.7331L87.117 15.7485C87.3565 16.4856 86.5129 17.0985 85.8859 16.643L82.4702 14.1613C82.1898 13.9576 81.8102 13.9576 81.5298 14.1613L78.1141 16.643C77.4871 17.0985 76.6435 16.4856 76.883 15.7485L78.1877 11.7331C78.2948 11.4035 78.1774 11.0424 77.8971 10.8387L74.4814 8.35704C73.8544 7.90152 74.1766 6.90983 74.9516 6.90983H79.1736C79.5202 6.90983 79.8274 6.68666 79.9345 6.35704L81.2392 2.34164Z" fill="#67E776" />
                                    <path d="M105.239 2.34164C105.479 1.60459 106.521 1.60459 106.761 2.34164L108.066 6.35704C108.173 6.68666 108.48 6.90983 108.826 6.90983H113.048C113.823 6.90983 114.146 7.90152 113.519 8.35704L110.103 10.8387C109.823 11.0424 109.705 11.4035 109.812 11.7331L111.117 15.7485C111.356 16.4856 110.513 17.0985 109.886 16.643L106.47 14.1613C106.19 13.9576 105.81 13.9576 105.53 14.1613L102.114 16.643C101.487 17.0985 100.644 16.4856 100.883 15.7485L102.188 11.7331C102.295 11.4035 102.177 11.0424 101.897 10.8387L98.4814 8.35704C97.8544 7.90152 98.1766 6.90983 98.9516 6.90983H103.174C103.52 6.90983 103.827 6.68666 103.934 6.35704L105.239 2.34164Z" fill="#67E776" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#777] pt-3'>
                                {data.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10  flex  moving gap-10">
                {reviews.map((data, id) => (
                    <div key={id} className="py-5 pl-5 flex flex-col min-w-[393px] h-[215px] rounded-[10px] border ">
                        <div className='flex gap-3'>
                            <Image src={data.img} alt='' width={200} height={200} className='w-[48px] h-[48px] rounded-full' />
                            <div className='flex flex-col '>
                                <p className='text-[16px] font-[500]'>{data.title}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="116" height="20" viewBox="0 0 116 20" fill="none">
                                    <path d="M9.23915 2.34164C9.47864 1.60459 10.5214 1.60459 10.7608 2.34164L12.0655 6.35704C12.1726 6.68666 12.4798 6.90983 12.8264 6.90983H17.0484C17.8234 6.90983 18.1456 7.90152 17.5186 8.35704L14.1029 10.8387C13.8226 11.0424 13.7052 11.4035 13.8123 11.7331L15.117 15.7485C15.3565 16.4856 14.5129 17.0985 13.8859 16.643L10.4702 14.1613C10.1898 13.9576 9.81016 13.9576 9.52977 14.1613L6.11407 16.643C5.48709 17.0985 4.64351 16.4856 4.88299 15.7485L6.18768 11.7331C6.29478 11.4035 6.17745 11.0424 5.89706 10.8387L2.48135 8.35704C1.85438 7.90152 2.1766 6.90983 2.95158 6.90983H7.17363C7.52021 6.90983 7.82737 6.68666 7.93447 6.35704L9.23915 2.34164Z" fill="#67E776" />
                                    <path d="M33.2392 2.34164C33.4786 1.60459 34.5214 1.60459 34.7608 2.34164L36.0655 6.35704C36.1726 6.68666 36.4798 6.90983 36.8264 6.90983H41.0484C41.8234 6.90983 42.1456 7.90152 41.5186 8.35704L38.1029 10.8387C37.8226 11.0424 37.7052 11.4035 37.8123 11.7331L39.117 15.7485C39.3565 16.4856 38.5129 17.0985 37.8859 16.643L34.4702 14.1613C34.1898 13.9576 33.8102 13.9576 33.5298 14.1613L30.1141 16.643C29.4871 17.0985 28.6435 16.4856 28.883 15.7485L30.1877 11.7331C30.2948 11.4035 30.1774 11.0424 29.8971 10.8387L26.4814 8.35704C25.8544 7.90152 26.1766 6.90983 26.9516 6.90983H31.1736C31.5202 6.90983 31.8274 6.68666 31.9345 6.35704L33.2392 2.34164Z" fill="#67E776" />
                                    <path d="M57.2392 2.34164C57.4786 1.60459 58.5214 1.60459 58.7608 2.34164L60.0655 6.35704C60.1726 6.68666 60.4798 6.90983 60.8264 6.90983H65.0484C65.8234 6.90983 66.1456 7.90152 65.5186 8.35704L62.1029 10.8387C61.8226 11.0424 61.7052 11.4035 61.8123 11.7331L63.117 15.7485C63.3565 16.4856 62.5129 17.0985 61.8859 16.643L58.4702 14.1613C58.1898 13.9576 57.8102 13.9576 57.5298 14.1613L54.1141 16.643C53.4871 17.0985 52.6435 16.4856 52.883 15.7485L54.1877 11.7331C54.2948 11.4035 54.1774 11.0424 53.8971 10.8387L50.4814 8.35704C49.8544 7.90152 50.1766 6.90983 50.9516 6.90983H55.1736C55.5202 6.90983 55.8274 6.68666 55.9345 6.35704L57.2392 2.34164Z" fill="#67E776" />
                                    <path d="M81.2392 2.34164C81.4786 1.60459 82.5214 1.60459 82.7608 2.34164L84.0655 6.35704C84.1726 6.68666 84.4798 6.90983 84.8264 6.90983H89.0484C89.8234 6.90983 90.1456 7.90152 89.5186 8.35704L86.1029 10.8387C85.8226 11.0424 85.7052 11.4035 85.8123 11.7331L87.117 15.7485C87.3565 16.4856 86.5129 17.0985 85.8859 16.643L82.4702 14.1613C82.1898 13.9576 81.8102 13.9576 81.5298 14.1613L78.1141 16.643C77.4871 17.0985 76.6435 16.4856 76.883 15.7485L78.1877 11.7331C78.2948 11.4035 78.1774 11.0424 77.8971 10.8387L74.4814 8.35704C73.8544 7.90152 74.1766 6.90983 74.9516 6.90983H79.1736C79.5202 6.90983 79.8274 6.68666 79.9345 6.35704L81.2392 2.34164Z" fill="#67E776" />
                                    <path d="M105.239 2.34164C105.479 1.60459 106.521 1.60459 106.761 2.34164L108.066 6.35704C108.173 6.68666 108.48 6.90983 108.826 6.90983H113.048C113.823 6.90983 114.146 7.90152 113.519 8.35704L110.103 10.8387C109.823 11.0424 109.705 11.4035 109.812 11.7331L111.117 15.7485C111.356 16.4856 110.513 17.0985 109.886 16.643L106.47 14.1613C106.19 13.9576 105.81 13.9576 105.53 14.1613L102.114 16.643C101.487 17.0985 100.644 16.4856 100.883 15.7485L102.188 11.7331C102.295 11.4035 102.177 11.0424 101.897 10.8387L98.4814 8.35704C97.8544 7.90152 98.1766 6.90983 98.9516 6.90983H103.174C103.52 6.90983 103.827 6.68666 103.934 6.35704L105.239 2.34164Z" fill="#67E776" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#777] pt-3'>
                                {data.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Reviews