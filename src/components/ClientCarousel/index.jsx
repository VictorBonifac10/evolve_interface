import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Person from '../../assets/person.jpg'

import { ContainerCarousel } from './styles'

export function ClientCarousel() {

    return (
        <ContainerCarousel>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='clientCard'>
                        <img src={Person} alt="Foto do Cliente" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptas hic autem labore commodi.</p>
                        <h3>Alencar Júnior - <span>Agência Mais </span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='clientCard'>
                        <img src={Person} alt="Foto do Cliente" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptas hic autem labore commodi.</p>
                        <h3>Alencar Júnior - <span>Agência Mais </span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='clientCard'>
                        <img src={Person} alt="Foto do Cliente" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptas hic autem labore commodi.</p>
                        <h3>Alencar Júnior - <span>Agência Mais </span></h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </ContainerCarousel >
    )
}