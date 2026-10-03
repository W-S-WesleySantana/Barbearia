import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px 5px;
  background-color: #f4f2f2; 

  .swiper-slide {
    width: 200px; 
    height: 200px; 
  }
`;

export const ImagemCarrossel = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
`;
