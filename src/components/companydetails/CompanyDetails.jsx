import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CompanyDetails = () => {
    const data = [
        {
            id: 1,
            title: 'Nest',
            text: 'Consumer Electronics',
            followers: '44,605 followers',
            img: '/images/nest.png',
        },
        {
            id: 1,
            title: 'Adometry by Google Marketing and',
            text: 'Consumer Electronics',
            followers: '44,605 followers',
            img: '/images/adometry.png',
        },
        {
            id: 1,
            title: 'X, the moonshot factory',
            text: 'Consumer Electronics',
            followers: '44,605 followers',
            img: '/images/x.png',
        },
        {
            id: 1,
            title: 'Youtube',
            text: 'Consumer Electronics',
            followers: '44,605 followers',
            img: '/images/youtube.png',
        },
    ]
    const data2 = [
        {
            id: 1,
            title: 'UNICEF',
            followers: '44,605 followers',
            img: '/images/uni.png',
        },
        {
            id: 1,
            title: 'Amnesty international',
            followers: '44,605 followers',
            img: '/images/amnesty.png',
        },
        {
            id: 1,
            title: 'WWF',
            followers: '44,605 followers',
            img: '/images/wwf.png',
        },
        {
            id: 1,
            title: 'Youtube',
            followers: '44,605 followers',
            img: '/images/electronic.png',
        },
    ]
    return (

        <div className='py-20'>
            <div className='w-full bg-white py-5 px-5 border border-[#D0D0D0] rounded-md'>
                <div className='flex md:flex-row flex-col gap-5 '>
                    <Image src={'/images/google.png'} width={700} height={700} className='w-[100px] h-[100px] md:w-[225px] md:h-[225px] rounded-md' alt='' />

                    <div className='flex text-[12px] md:text-[16px] flex-col gap-1'>
                        <h1 className='text-[#4E1D9A] font-[600] text-[24px]'>
                            Google Inc.
                        </h1>
                        <div className='flex flex-col md:flex-row gap-10'>
                            <div className='flex items-center gap-10'>
                                <p className='text-[#777777] font-[500]'>
                                    Headquarters
                                </p>
                                <p className='font-[500]'>
                                    Mountain View, CA
                                </p>
                            </div>
                            <div className='flex items-center gap-10'>
                                <p className='text-[#BDBCBC] font-[500]'>
                                    Industry:
                                </p>
                                <p className=' text-[#BDBCBC] font-[500]'>
                                    Type
                                </p>
                            </div>


                        </div>
                        <div className='flex flex-col md:flex-row gap-10'>
                            <div className='flex items-center gap-10'>
                                <p className='text-[#777777] font-[400]'>
                                    Company Size
                                </p>
                                <p className='font-[500]'>
                                    10,000+ Employs
                                </p>
                            </div>
                            <div className='flex items-center gap-10 pl-3'>
                                <p className='text-[#BDBCBC] font-[500]'>
                                    Internet
                                </p>
                                <p className=' text-[#BDBCBC] font-[500]'>
                                    Public Company
                                </p>
                            </div>


                        </div>
                        <div className='flex flex-col gap-1 pt-7 text-[#777]'>
                            <p>
                                1600 Amphitheatre Parkway
                            </p>
                            <p>
                                Mountain View, CA 94043
                            </p>
                            <p>
                                Phone: +1 35455 6777
                            </p>


                        </div>
                    </div>
                    <div className='md:absolute md:right-60'>
                        <Link href={'/internships'}>
                            <button
                                className="bg-primary-text-color text-white rounded-md w-[173px] h-[50px] "
                            >
                                See all Internships
                            </button></Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row  gap-10 mt-10'>
                <div className='text-[#000000] basis-[100%] md:basis-[70%] flex flex-col gap-5 w-full bg-white py-5 px-5 border border-[#D0D0D0] rounded-md'>
                    <h1 className='text-[24px] font-[600]'>
                        About Us:
                    </h1>
                    <p >
                        Google, a multinational technology company founded in 1998, stands as a ubiquitous emblem of the digital age.
                    </p>
                    <p>
                        Renowned for its powerful search engine, Google has transcended its origins to become a colossal conglomerate, offering an extensive array of services encompassing online advertising technologies, cloud computing, software, and hardware. From its inception, Google has been a pioneer in data organization and accessibility, reshaping the way people interact with information. The company's commitment to innovation is epitomized by ventures into artificial intelligence, self-driving cars, and advancements in quantum computing, solidifying its position as a driving force in shaping the technological landscape of the modern world.
                    </p>
                    <div className='flex flex-col '>
                        <h2 className='text-black font-[500]'>
                            Search Engine Prowess:
                        </h2>
                        <p className=''>
                            Google's search engine is renowned for its accuracy, speed, and ability to deliver relevant results from the vast expanse of the internet.
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-black font-[500]'>
                            Advertising Dominance:
                        </h3>
                        <p>

                            Google Ads offers a sophisticated platform for targeted online advertising, enabling businesses to reach specific audiences effectively.
                        </p>
                    </div>
                    <div className='flex  flex-col '>
                        <h4 className='text-black font-[500]'>
                            Open Source Initiatives:
                        </h4>
                        <p>
                            Google's commitment to open-source development has led to projects like Android, which powers the majority of the world's smartphones.
                        </p>
                    </div>
                    <div className='flex  flex-col '>
                        <h5 className='text-black font-[500]'>
                            Artificial Intelligence Innovations:
                        </h5>
                        <p>
                            With products like Google Assistant and TensorFlow, Google is at the forefront of AI development, revolutionizing how machines learn and interact.
                        </p>
                    </div>
                    <div className='flex  flex-col '>
                        <h6 className='text-black font-[500]'>
                            Cloud Computing Services:
                        </h6>
                        <p>
                            Google Cloud provides a suite of services including computing, storage, and data analytics, catering to enterprises' growing digital infrastructure needs.
                        </p>
                    </div>
                    <div className='border-t'>
                        <h1 className='text-[24px] font-[600] pt-5'>
                            Affiliated Companies
                        </h1>
                        <div className='grid grid-cols-1 md:grid-cols-2  gap-6 mt-5'>
                            {
                                data.map((item, i) => (
                                    <div key={i} className='flex  gap-5'>
                                        <Image src={item.img} alt='' width={1080} height={1080} className='w-[72px] h-[68px] object-cover' />
                                        <div className='flex flex-col '>
                                            <h1 className='text-[18px] font-[500]'>
                                                {item.title}
                                            </h1>
                                            <p className='text-[18px] font-[500] text-[#777]'>
                                                {item.text}
                                            </p>
                                            <p className='text-[16px] text-[#777]'>
                                                {item.followers}
                                            </p>
                                        </div>

                                    </div>

                                ))
                            }

                        </div>
                    </div>
                    <div className='border-t'>
                        <h1 className='text-[24px] font-[600] pt-5'>
                            Organization our employs support
                        </h1>
                        <div className='grid grid-cols-1 md:grid-cols-2  gap-6 mt-5'>
                            {
                                data2.map((item, i) => (
                                    <div key={i} className='flex  gap-5'>
                                        <Image src={item.img} alt='' width={1080} height={1080} className='w-[72px] h-[68px] object-cover' />
                                        <div className='flex flex-col '>
                                            <h1 className='text-[18px] font-[500]'>
                                                {item.title}
                                            </h1>

                                            <p className='text-[16px] text-[#777]'>
                                                {item.followers}
                                            </p>
                                        </div>

                                    </div>

                                ))
                            }

                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-5 basis-[100%] md:basis-[30%]'>
                <div className='text-[#000000] flex flex-col gap-5 w-full bg-white py-5 px-5 border border-[#D0D0D0] rounded-md'>
                    <h1 className='text-[18px] font-[500] '>
                        Languages we speak
                    </h1>
                    <div className='flex gap-5'>
                        <div className='flex gap-1'>
                            <p className='text-[#777]'>
                                English:
                            </p>
                            <p className='font-[500]'>
                                98%
                            </p>
                        </div>
                        <div className='flex gap-1'>
                            <p className='text-[#777]'>
                                German:
                            </p>
                            <p className='font-[500]'>
                                09%
                            </p>
                        </div>

                    </div>
                    <div className='flex gap-5'>
                        <div className='flex gap-1'>
                            <p className='text-[#777]'>
                                Spanish:
                            </p>
                            <p className='font-[500]'>
                                11%
                            </p>
                        </div>
                        <div className='flex gap-1'>
                            <p className='text-[#777]'>
                                Chiness:
                            </p>
                            <p className='font-[500]'>
                                06%
                            </p>
                        </div>

                    </div>
                    <div className='flex gap-5'>
                        <div className='flex gap-1'>
                            <p className='text-[#777]'>
                                French:
                            </p>
                            <p className='font-[500]'>
                                05%
                            </p>
                        </div>


                    </div>
                </div>
                <div className='text-[#000000]  flex flex-col gap-5 w-full bg-white py-5 px-5 border border-[#D0D0D0] rounded-md'>
                    <h1 className='text-[18px] font-[500] '>
                        Causes our employs care about
                    </h1>
                    <div className='flex gap-5'>
                        <div className='flex gap-1'>
                            <p className='text-[#777]'>
                                Education:
                            </p>
                            <p className='font-[500]'>
                                70%
                            </p>
                        </div>
                        <div className='flex md:gap-1'>
                            <p className='text-[#777]'>
                                Human rights:
                            </p>
                            <p className='font-[500]'>
                                44%
                            </p>
                        </div>

                    </div>
                    <div className='flex gap-5'>
                        <div className='flex gap-1'>
                            <p className='text-[#777]'>
                                Environment:                            </p>
                            <p className='font-[500]'>
                                22%
                            </p>
                        </div>
                        <div className='flex gap-1'>
                            <p className='text-[#777]'>
                                Childern:
                            </p>
                            <p className='font-[500]'>
                                33%
                            </p>
                        </div>

                    </div>
    
                </div>

                </div>


            </div>
        </div>
    )
}

export default CompanyDetails