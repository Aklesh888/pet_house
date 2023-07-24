import Image from 'next/image';
import React from 'react'

type Props = {
    image: any;
    title: string;
    description: string;
}

const BlogsCard = (props: Props) => {
  return (
    <div className='flex flex-col rounded-2xl items-start justify-center py-0 h-[500px] w-[450px] px-5 m-5'>
        <Image src={props.image} alt="" className='h-[300px] w-[500px] py-4 self-center rounded-md'/>
        <div className='text-2xl py-2 font-bold'>{props.title}</div>
        <div className='py-2 text-[#515151]'>{props.description}</div>
        <div className='flex justify-center items-center py-3 w-32 bg-[#17224D] rounded-lg text-white mt-10 '>
            View details
        </div>
    </div>
  )
}

export default BlogsCard 