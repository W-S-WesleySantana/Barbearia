import styled from "styled-components";

export const Container = styled.div`

padding: 40px 20px;
width: 90%;
margin: 0 auto;

h2{
    margin-bottom: 20px;
}

p{
  margin-bottom: 10px;
}
`

export const NamePriceDescription = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #000;
    max-height: 70vh;
   
    

     overflow-y: auto;
     

       &::-webkit-scrollbar {
       width: 5px;
       }

         &::-webkit-scrollbar-track {
    background: #f2f1f1;
         }

           &::-webkit-scrollbar-thumb {
    background: #e2e1e1;
  }


   
`

export const IconeNaTela = styled.div`

border: 1px solid rgb(234, 234, 234);
background-color:rgb(252, 251, 251);
border-radius:10px ;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;





h3{
   margin-bottom: 15px;
}

button{
   width: 12vw;
   height: 5vh;
   border-radius: 10px;
   border: none;
   background: black;
   color: white;
   font-weight: 700;
   cursor: pointer;

   &:hover{
    background: #818181;
    color: #000;
   }

  }


  @media (max-width: 500px) {
    
    p{
   

      width: 80%;
      margin: 5px 0;
    }

    button{
    
      width: 20vw;
    }
    

}



`

export const ButaoScheduling = styled.div`
  text-align: right;
  margin-top: 10px;
`;

export const ServicePrice = styled.span`
  font-size: 20px;
  font-weight: bold;
  color:rgb(17, 63, 5);

`;

export const EmptyStateText = styled.p`
  text-align: center;
  color: #888;
  grid-column: 1 / -1;
`;



export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); 
  display: flex;
  justify-content: center;
  align-items: center; 
  z-index: 9999; 
`;


export const ModalCard = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  width: 80%;
  max-width: 420px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  font-family: Arial, sans-serif;

  h2 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #333333;
  }

  p{
    margin: 0 0 20px 0;
    color: #666;
    font-size: 14px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
    color: #555555;
    font-size: 14px;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: #25d366;
    }
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;


const BaseModalButton = styled.button`
  flex: 1;
  padding: 12px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;


export const BotaoFechar = styled(BaseModalButton)`
  background-color: #dc3545;
`;


export const BotaoEnviar = styled(BaseModalButton)`
  background-color: #25d366;
`;
