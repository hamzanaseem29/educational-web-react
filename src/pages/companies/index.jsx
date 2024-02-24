import Companies from '@/components/companies/Companies'
import Layout from '@/components/shared/Layout'
import Wrapper from '@/components/shared/Wrapper'
import React from 'react'

const index = () => {
    return (
        <div>
            <Layout>
                <div className='flex flex-col justify-center text-center items-center pt-28 md:pt-40'>
                    <h1 className='text-[32px] md:text-[40px]  font-[700] text-white'>
                       Companies
                    </h1>
                    <p className='text-white font-[500] text-[18px]'>
                        Company reviews, Course review, Internship
                    </p>
                </div>
            </Layout>
            <div className='bg-[#F0EBCE38]'>
                <Wrapper>
                    <Companies />
                </Wrapper>
            </div>
        </div>
    )
}

export default index