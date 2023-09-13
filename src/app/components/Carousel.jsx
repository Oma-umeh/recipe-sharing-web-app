"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false },
  [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"> <Image src='/back2.jpg' alt='swipe' width={700} height={600}/></div>
        <div className="embla__slide"> <Image src='/back2.jpg' alt='swipe' width={700} height={600}/></div>
        {/* <div className="embla__slide"> <Image src='/back4.jpg' alt='swipe' width={700} height={600}/></div> */}
        {/* <div className="embla__slide"> <Image src='/back4.jpg' alt='swipe' width={700} height={600}/></div> */}
      </div>
    </div>
  )
}
