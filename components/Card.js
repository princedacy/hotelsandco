import React from 'react'
import Image from 'next/image'
function Card({img, name, location, price, date}) {
  return (
    <div>
        <div className='relative w-80 h-80'>
            <Image src={img} alt="" style={{objectFit: 'contain', objectPosition: 'center'}} fill/>
        </div>
    </div>
  )
}

export default Card