import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, Autoplay, A11y } from "swiper";
// Import Swiper styles
import 'swiper/css/bundle';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Slider = () => {
    const swiperRef = useRef();
    return (
        <div className="relative">
            <Swiper
                modules={[Pagination, Navigation, Autoplay, A11y]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="hidden"
            >
                <SwiperSlide>
                    <div className="hero h-[70vh]" style={{ backgroundImage: `url("/banner/banner1.jpg")` }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div>
                                <h1 className="mb-5 text-5xl font-bold">Indulge in All-Time Favorites</h1>
                                <p className="mb-5">Dive into the rich and comforting world of classic American comfort foods. From juicy cheeseburgers with all the fixings to creamy macaroni and cheese that melts in your mouth, this collection of beloved dishes will satisfy your cravings and warm your soul. Indulge in golden fried chicken, fluffy biscuits smothered in gravy, and hearty meatloaf that tastes just like home. These timeless American comfort foods are sure to bring back nostalgic memories and make your taste buds sing with joy.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[70vh]" style={{ backgroundImage: `url("/banner/banner2.jpg")` }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div>
                                <h1 className="mb-5 text-5xl font-bold">Sweet Bliss Awaits</h1>
                                <p className="mb-5">Prepare to indulge your sweet tooth with a delectable array of American desserts that will transport you to dessert heaven. From luscious apple pies with flaky crusts to gooey chocolate chip cookies fresh out of the oven, these sweet treats are guaranteed to satisfy your cravings. Take a bite of creamy New York cheesecake or dive into a towering slice of decadent red velvet cake. Sink your spoon into a velvety bowl of classic American ice cream, topped with hot fudge and sprinkles. Whether you prefer fruity, chocolaty, or creamy delights, these American desserts will leave you craving for more.</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[70vh]" style={{ backgroundImage: `url("/banner/banner3.jpg")` }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div>
                                <h1 className="mb-5 text-5xl font-bold">A Mouthwatering Journey of Smoky Delights</h1>
                                <p className="mb-5">Embark on a tantalizing journey through the smoky world of iconic American BBQ. From slow-cooked pulled pork to tender and flavorful ribs slathered in tangy sauce, this culinary adventure is a meat lover's paradise. Discover the art of low and slow smoking, where the hickory-infused aroma permeates every bite. Sink your teeth into juicy brisket, savor the smoky goodness of grilled sausages, and relish the satisfying crackle of perfectly charred BBQ chicken. This is American BBQ at its finest, where flavors reign supreme and BBQ enthusiasts gather to celebrate the art of grilling.</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <button onClick={() => swiperRef.current?.slidePrev()} className="hidden lg:block mx-10 hover:bg-white btn z-10 btn-ghost absolute text-main  top-[45%] bg-white rounded-full"><HiArrowLeft></HiArrowLeft></button>
            <button onClick={() => swiperRef.current?.slideNext()} className="hidden lg:block mx-10 hover:bg-white btn z-10 btn-ghost absolute text-main  top-[45%] right-0 bg-white rounded-full"><HiArrowRight></HiArrowRight></button>
        </div>
    );
};

export default Slider;