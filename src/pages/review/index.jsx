import Reviews from '@/components/reviews/Reviews'
import Layout from '@/components/shared/Layout'
import Wrapper from '@/components/shared/Wrapper'
import React from 'react'
import { AiFillEye, AiFillLike, AiTwotoneStar } from 'react-icons/ai'

const index = () => {
    return (
        <div>
            <Layout>
                <div className='flex flex-col justify-center items-center pt-32 2xl:pt-48'>
                    <h1 className='text-[40px] font-[700] text-white'>
                        Reviews
                    </h1>
                    <div className='flex gap-10 items-center justify-center mt-5'>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-white font-[500] text-[24px]'>12</p>
                            <div className='flex gap-3 items-center mt-3'>
                                <AiTwotoneStar size={22} className='text-primary-text-color' />
                                <p className='text-[16px] font-[500] text-white'>
                                    Reviews
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-white font-[500] text-[24px]'>05</p>
                            <div className='flex gap-3 items-center mt-3'>
                                <AiFillEye size={22} className='text-primary-text-color' />
                                <p className='text-[16px] font-[500] text-white'>
                                    Reads
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-white font-[500] text-[24px]'>01</p>
                            <div className='flex gap-3 items-center mt-3'>
                                <AiFillLike size={22} className='text-primary-text-color' />
                                <p className='text-[16px] font-[500] text-white'>
                                    User
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
            <div className='bg-[#F0EBCE38]'>
            <Wrapper>
                <div className='flex justify-center items-center py-20'>
                    <Reviews/>
                </div>
            </Wrapper>

            </div>

        </div>
    )
}

export default index