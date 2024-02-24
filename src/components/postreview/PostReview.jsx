import Image from 'next/image'
import React from 'react'

const PostReview = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex gap-3'>
        <Image src={'/images/top1.png'} alt='' width={500} height={500} className='h-[146px] w-[159px]' />
        <p>Dara</p>
      </div>
    </div>
  )
}

export default PostReview