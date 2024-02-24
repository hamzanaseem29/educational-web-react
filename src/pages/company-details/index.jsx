import Companies from '@/components/companies/Companies'
import CompanyDetails from '@/components/companydetails/CompanyDetails'
import Layout from '@/components/shared/Layout'
import Wrapper from '@/components/shared/Wrapper'
import React from 'react'


const index = () => {
    return (
        <div>
            <Layout>
                <div className='flex flex-col justify-center text-center items-center pt-28 md:pt-48'>
                    <h1 className='text-[32px] md:text-[40px]  font-[700] text-white'>
                       Company Details
                    </h1>
                </div>
            </Layout>
            <div className='bg-[#F0EBCE38]'>
                <Wrapper>
                    <CompanyDetails/>
                </Wrapper>
            </div>
        </div>
    )
}

export default index