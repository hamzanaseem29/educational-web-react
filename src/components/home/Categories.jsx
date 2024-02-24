import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'

const Categories = () => {
    const data = [
        {
            id:'1',
            img: '/images/card1.png',
            title:'College & Universities',
        },
        {
            id:'1',
            img: '/images/card2.png',
            title:'Courses & Classes',
        },
        {
            id:'3',
            img: '/images/card3.png',
            title:'Educational Services',
        },
        {
            id:'4',
            img: '/images/card4.png',
            title:'Language Learning',
        },
        {
            id:'5',
            img: '/images/card5.png',
            title:'Music & Theater Classes',
        },
        {
            id:'1',
            img: '/images/card6.png',
            title:'Vocational Training Center',
        },
        {
            id:'1',
            img: '/images/card7.png',
            title:'College & Universties',
        },
        {
            id:'1',
            img: '/images/card8.png',
            title:'College & Universties',
        },
    ]
  return (
    <div className='pt-20'>
        <Wrapper>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[32px] md:text-[40px] font-[700]'>
                    Explore Categories
                </h1>
                <div className='mt-10 flex justify-center items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7'>
                    {data.map((item, index)=> (
                        <div key={item.id} className='w-[287px] rounded-[10px] border h-[180px] flex flex-col justify-center items-center gap-5'>
                            <div className='w-[95px] h-[95px] rounded-full flex justify-center items-center' style={{background:"rgba(78, 29, 154, 0.09)"}}>
                                <Image src={item.img} width={500} alt='card-image' height={500} className='w-[45px] h-[45px] ' />
                            </div>
                            <div>
                                <p className='text-[18px] font-[600]'>
                                    {item.title}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Categories