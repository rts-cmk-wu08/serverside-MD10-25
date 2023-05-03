"use client"

import "swiper/css";
import "swiper/css/navigation";
import { use } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

async function getOffers(){
    return (await fetch(`http://localhost:4000/offers`, { next: { revalidate: 30 } })).json()
  }

export default function Slider() {
  const allOffers = use(getOffers())
    console.log(allOffers)
    return (
    <Swiper navigation={true} modules={[Navigation]} loop={true} pagination={true} className="mySwiper h-[650px] bg-slate-600" >
            {allOffers?.map((offer, index) => (
                <SwiperSlide className={`bg-no-repeat bg-center bg-cover ${ index === 0 ? "bg-heroBeanie" : index === allOffers.length - 1 ? "bg-heroBook" : "bg-heroGirl"}`}>
                    <div className="flex flex-col gap-6 w-[700px] ml-[47%] mt-[10%]">
                        <h1 className="text-7xl">{offer.headline}</h1>
                        <p>{offer.text}</p>
                        <button className="uppercase bg-black text-white w-[186px] h-[36px]">Shop now</button>
                    </div>
                </SwiperSlide>
                ))}
    </Swiper>
    )
  }
  