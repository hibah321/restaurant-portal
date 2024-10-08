import React from 'react'
import Image from 'next/image'
import rest_images from '../../../public/images/restaurant/index'
import images from '../../../public/images/index'

const RestaurantIntro = ({ rest }) => {
    const maxStars = 5
    const stars = Array(maxStars).fill(0).map((_, index) => {
        return index < rest.reviews ? <Image src={images.star_fill} alt='star' /> : <Image src={images.star_hollow} alt='star' />;
    });
    return (
        <div className='flex flex-col lg:flex-row px-5 gap-4'>
            <div className=' flex flex-col justify-between md:flex-[0.15]'>
                <Image src={rest_images.rest_image} alt='restaurant image' 
                width={200}
                style={{maxWidth: '200px'}}
                />
                <span className='text-light-text tracking-tighter text-xs md:text-base lg:text-lg'>{rest.cuisines}</span>
            </div>
            <div className='flex-[0.85] space-y-3'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='font-semibold text-2xl text-heading-clr'>{rest.name}</h2>
                        <div className="flex">
                            {stars.map((star, index) => (
                                <span key={index}>{star}</span>
                            ))}
                        </div>
                    </div>
                    <span className='font-medium text-lg text-dark-text'>{rest.price}</span>
                </div>
                <div >
                    <p className='text-lg text-dark-text'>{rest.para}</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantIntro