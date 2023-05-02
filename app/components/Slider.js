"use client"
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function Slider() {
    return (
    <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper h-[650px] bg-slate-600" >
        <SwiperSlide className="bg-heroBeanie bg-no-repeat bg-center bg-cover">
            <div>
                <h1>Orange Beanie</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda provident nulla ut, incidunt voluptas reiciendis veritatis fugiat autem cupiditate accusamus.</p>
                <button className="uppercase">Shop now</button>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-heroBook bg-no-repeat bg-center bg-cover"></SwiperSlide>
        <SwiperSlide className="bg-heroGirl bg-no-repeat bg-center bg-cover"></SwiperSlide>
    </Swiper>
    )
  }
  