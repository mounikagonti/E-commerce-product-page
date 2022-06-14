import React, { useEffect, useLayoutEffect, useState } from "react"
import Image from "next/image"
import imgOne from "../../public/images/image-product-1.jpg"
import imgTwo from "../../public/images/image-product-2.jpg"
import imgThree from "../../public/images/image-product-3.jpg"
import imgFour from "../../public/images/image-product-4.jpg"

const Swiper = () => {
  const sliderImages = [imgOne, imgTwo, imgThree, imgFour]
  const [currentImage, setCurrentImage] = useState(sliderImages[0])

  const handleSetCurrentImage = (src) => {
    setCurrentImage(src)
  }

  return (
    <div className='slider'>
      <div className='slider_top'>
        <Image
          src={currentImage}
          layout='fill'
          objectFit='contain'
          // style={{ borderRadius: "20px" }}
        />
      </div>
      <div className='slider_bottom'>
        {sliderImages?.map((image) => (
          <div
            className='thumbnail'
            onClick={() => handleSetCurrentImage(image)}
            key={image}
          >
            <Image src={image} layout='fill' objectFit='contain' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Swiper
