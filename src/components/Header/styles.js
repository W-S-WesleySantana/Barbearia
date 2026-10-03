import styled from "styled-components";


export const Conteiner = styled.div`

width: 100%;
height: auto;

img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center

}

&::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0; 
    height: 45%; 
    background: linear-gradient(to bottom, transparent 60%, rgb(255, 255, 255) 100%);
    pointer-events: none; 
  }
`

export const ConteinerIconName = styled.div`
display: flex;
position: relative;
margin-top: -50px;
z-index: 1;

`

export const Icon = styled.div`

padding: 0 20px;
justify-content: center;
align-items: center;


img{
    width: 100px;
    height: 100px;
    border-radius: 100px;
   
}
`

export const Name = styled.div`

padding: 20px 0;

p{
    color:rgb(134, 134, 134);
    padding: 5px 0;
}

`

export const EvaluationRanking = styled.ul`

gap: 5px;
display: flex;
text-align: center;
margin-top: 15px;
font-size: 12px;


span{
    border-left:1px solid #efefef;
    border-right:1px solid #efefef;
}
li{
 
  width: 120px;

}

p{
    color:#868686;
   
}
`

export const ContainerSocialMedia  = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
gap: 15px;
padding: 50px 0;

a{
    color:rgb(25, 25, 25);
}

`
export const ButtonWhats = styled.a`

border: 1px solid #0cb93a6a;
border-radius:10px ;
padding: 10px 0;
font-size: 16px;
font-weight: bold;
width: 45%;
text-align: center;
background: #cbf6e478;
cursor: pointer;




`
export const ButtonInsta = styled.a`

border: 1px solid #b90c6547;
border-radius:10px ;
padding: 10px 0;
font-size: 16px;
font-weight: bold;
width: 45%;
text-align: center;
background: #fabcd5b0;
cursor: pointer;



`

