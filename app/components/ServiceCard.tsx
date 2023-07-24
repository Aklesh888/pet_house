import Image from 'next/image';
import React from 'react'

type Props = {
    image: any;
    title: string;
    description: string;
}

const ServiceCard = (props: Props) => {
  return (
    <div className='flex flex-col rounded-2xl items-start justify-ceter py-0 h-[500px] w-[450px]  border m-5 pb-4'>
        <Image src={props.image} alt="" className='h-[300px] w-[100%] pt-0 pb-4 self-center p-0'/>
        <div className='text-2xl py-2 font-bold px-5'>{props.title}</div>
        <div className='py-2 text-[#515151] px-5'>{props.description}</div>
        <div className='flex justify-center items-center py-3 w-32 bg-[#17224D] rounded-lg text-white self-center mt-10'>
            View more
        </div>
    </div>
  )
}

export default ServiceCard