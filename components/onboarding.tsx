"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import "swiper/css"

export default function Onboarding() {
  return (
    <>
      <section className="container flex flex-col justify-center gap-8 pb-8 pt-6">
        <div className="flex max-w-[580px] flex-col items-center gap-2">
          <p className="duration-10000  flex h-11 w-11 animate-bounce items-center justify-center text-4xl delay-150">
            🚀
          </p>
          <h1 className="border-slate-200	text-center text-3xl font-bold leading-tight tracking-tighter text-blue-500 md:text-4xl">
            <strong>Bùng</strong> nổ doanh số cùng
            <Image
              className="m-4 inline"
              src="https://simg.zalopay.com.vn/zlp-website/assets/logo1_ff390716a5.svg"
              width={98 * 1.5}
              height={28 * 1.5}
              alt=""
            />
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Kinh doanh bất cứ đâu, bất cứ lúc nào.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full flex-col gap-4">
            <Label className="font-bold" htmlFor="storeName">
              Tên cửa hàng
            </Label>
            <Input className="h-14" />
          </div>
          {/* <div className="flex w-full flex-col gap-4">
            <Label htmlFor="storeLink">Đường dẫn</Label>
            <Input />
          </div> */}
          <Button
            className="h-14 w-1/2 rounded-full bg-blue-500 text-lg font-bold"
            variant="default"
          >
            Tạo cửa hàng
          </Button>
        </div>
        {/* <div className="flex flex-row">
          <Swiper
            autoplay
            width={212}
            height={310}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                <Image
                  src="https://dongshopsun.vn/wp-content/uploads/2022/12/huong-dan-nap-tien-vao-tai-khoan-tich-luy-zalopay.jpg"
                  height={310}
                  width={212}
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}
      </section>
    </>
  )
}
