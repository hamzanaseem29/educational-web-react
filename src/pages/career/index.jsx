import About from '@/components/aboutus/About'
import Career from '@/components/career/Career'
import Layout from '@/components/shared/Layout'
import Wrapper from '@/components/shared/Wrapper'
import React from 'react'

const index = () => {
    return (
        <div>
            <Layout>
            <div className="flex justify-center items-center pt-40 md:pt-48">
                    <h1 className='text-[32px] md:text-[40px]  font-[700] text-white'>
                        Career
                    </h1>
                </div>
            </Layout>
            <div className='bg-[#F0EBCE38]'>
                <Wrapper>
                    <Career />
                </Wrapper>
            </div>
        </div>
    )
}

export default index