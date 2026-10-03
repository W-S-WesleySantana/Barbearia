import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; 

import { Container, ImagemCarrossel } from './styles';

export function BestCuts({ imagensDoBanco }) {
 
  const listaExibida = imagensDoBanco || [];

  return (
    <Container>
     
      <Swiper
        key={listaExibida.length}
        modules={[Navigation, Pagination, EffectCoverflow]} 
        effect={'coverflow'}
        grabCursor={true}             
        centeredSlides={true}          
        slidesPerView={'auto'}         
        
        coverflowEffect={{
          rotate: 20,                 
          stretch: 0,                 
          depth: 30,                 
          modifier: 1,                 
          slideShadows: true,          
        }}
        
        navigation
        pagination={{ clickable: true }}
      >
        {listaExibida.map((foto, index) => (
          <SwiperSlide key={index}>
            <ImagemCarrossel src={foto} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
