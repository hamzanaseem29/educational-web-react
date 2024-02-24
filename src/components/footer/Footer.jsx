import React from 'react'
import Wrapper from '../shared/Wrapper'
import Link from 'next/link'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi"
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai"




const Footer = () => {
    return (
        <div className=' bg-[#2C272E]'>
            <Wrapper>
                <div className='flex md:flex-row flex-col py-10 gap-10'>
                    <div className='md:max-w-[300px]'>
                        <h1 className='text-[24px] font-[700] text-primary-text-color pb-2'>
                            ED REVIEWS
                        </h1>
                        <p className='text-[16px] font-[400] text-white '>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-[18px] font-[500] text-primary-text-color pb-2 md:w-[168px]'>
                            Company
                        </h2>
                        <ul className='text-white'>
                            <Link href={'/about-us'}>
                                <li className='hover:text-primary-text-color duration-200 transition-all ease-in py-3'>
                                    About
                                </li>
                            </Link>
                            <Link href={'/products'}>
                                <li className='hover:text-primary-text-color duration-200 transition-all ease-in py-3'>
                                    Products
                                </li>
                            </Link>
                        
                            <Link href={'/career'}>
                                <li className='hover:text-primary-text-color duration-200 transition-all ease-in py-3'>
                                    Career
                                </li>
                            </Link>
                         
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[18px] font-[500] text-primary-text-color pb-2 md:w-[168px]'>
                            Support
                        </h3>
                        <ul className='text-white'>
                         
                            
                            <Link href={'/pricing'}>
                                <li className='hover:text-primary-text-color duration-200 transition-all ease-in py-3'>
                                    Pricing
                                </li>
                            </Link>
                           
                           
                            <Link href={'/videos'}>
                                <li className='hover:text-primary-text-color duration-200 transition-all ease-in py-3'>
                                    Videos
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[18px] font-[500] text-primary-text-color pb-2 '>
                            Contact Us
                        </h4>
                        <ul className='text-white'>
                            <Link href={''} className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M20.3744 16.6718C19.611 15.9026 17.7621 14.7801 16.865 14.3277C15.6968 13.7393 15.6006 13.6912 14.6824 14.3734C14.0699 14.8287 13.6627 15.2354 12.9459 15.0825C12.2291 14.9296 10.6715 14.0676 9.30761 12.7081C7.94373 11.3485 7.03175 9.7457 6.87839 9.0313C6.72503 8.31691 7.13847 7.91453 7.58941 7.30061C8.22496 6.43526 8.17689 6.29104 7.63364 5.12282C7.2101 4.2142 6.05487 2.38255 5.28278 1.62297C4.45686 0.807138 4.45686 0.951363 3.92467 1.17251C3.4914 1.3548 3.07574 1.57639 2.6829 1.8345C1.9137 2.34553 1.48679 2.77003 1.18825 3.40799C0.889703 4.04594 0.755574 5.54155 2.29733 8.34239C3.8391 11.1432 4.92078 12.5754 7.15963 14.808C9.39847 17.0406 11.12 18.241 13.6368 19.6525C16.7501 21.3962 17.9443 21.0563 18.5841 20.7582C19.224 20.4601 19.6504 20.0371 20.1624 19.2679C20.4212 18.8757 20.6433 18.4605 20.8259 18.0276C21.0475 17.4973 21.1917 17.4973 20.3744 16.6718Z" stroke="#54B435" strokeWidth="2" strokeMiterlimit="10" />
                                </svg>
                                <li className='hover:text-primary-text-color duration-200 transition-all ease-in py-3'>
                                    +91 33555 6778
                                </li>
                            </Link>
                            <Link href={''} className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                                    <path d="M20.333 0H1.66634C1.31272 0 0.973581 0.140476 0.723532 0.390524C0.473484 0.640573 0.333008 0.979711 0.333008 1.33333V14.6667C0.333008 15.0203 0.473484 15.3594 0.723532 15.6095C0.973581 15.8595 1.31272 16 1.66634 16H20.333C20.6866 16 21.0258 15.8595 21.2758 15.6095C21.5259 15.3594 21.6663 15.0203 21.6663 14.6667V1.33333C21.6663 0.979711 21.5259 0.640573 21.2758 0.390524C21.0258 0.140476 20.6866 0 20.333 0ZM19.3063 14.6667H2.77301L7.43967 9.84L6.47967 8.91333L1.66634 13.8933V2.34667L9.95301 10.5933C10.2028 10.8417 10.5408 10.9811 10.893 10.9811C11.2453 10.9811 11.5832 10.8417 11.833 10.5933L20.333 2.14V13.8067L15.4263 8.9L14.4863 9.84L19.3063 14.6667ZM2.53967 1.33333H19.253L10.893 9.64667L2.53967 1.33333Z" fill="#54B435" />
                                </svg>
                                <li className='hover:text-primary-text-color duration-200 transition-all ease-in py-3'>
                                    JohnDoe@gmail.com
                                </li>
                            </Link>
                            <Link href={''} className='flex items-center gap-3'>
                                <HiOutlineLocationMarker size={22} className='text-[#54B435] md:w-[40px]' />
                                <li className='hover:text-primary-text-color  duration-200  transition-all ease-in py-3'>
                                    Street 34 Sector 12 B
                                    Mumbai India
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-[18px] font-[500] text-primary-text-color mb-4'>
                            Connect with us
                        </h5>
                        <ul className='text-white flex gap-3'>
                            <Link href={''} className='flex items-center justify-center  gap-3 bg-[#54B435] w-10 h-10 rounded-full'>
                                <BiLogoFacebook size={22} className='text-white' />
                            </Link>
                            <Link href={''} className='flex items-center justify-center gap-3 w-10 h-10 bg-[#54B435] rounded-full'>
                                <BiLogoInstagramAlt size={22} className='text-white' />
                            </Link>
                            <Link href={''} className='flex items-center justify-center gap-3 w-10 h-10 bg-[#54B435] rounded-full'>
                                <AiOutlineTwitter size={22} className='text-white' />
                            </Link>
                            <Link href={''} className='flex items-center justify-center gap-3 w-10 h-10 bg-[#54B435] rounded-full'>
                                <BiLogoLinkedin size={22} className='text-white' />
                            </Link>
                            <Link href={''} className='flex items-center justify-center gap-3 w-10 h-10 bg-[#54B435] rounded-full'>
                                <AiFillYoutube size={22} className='text-white' />
                            </Link>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        

        </div>
    )
}

export default Footer