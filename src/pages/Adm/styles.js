import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;

 

  




  h2 {
    margin-bottom: 24px;
    color: #333;
  }

 
`;

export const ImagensTrabalhos = styled.section`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;

  

  h3 {
    margin-bottom: 15px;
    color: #444;
  }
`;

export const TabelaDeCortes = styled.section`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  

  h3 {
    margin-bottom: 15px;
    color: #444;
  }
`;

export const InputFileContainer = styled.div`
  margin-bottom: 15px; 
  


`;

export const TextoCarregando = styled.span`
  margin-left: 10px;
  color: blue;


`;

export const AreaPreviewCarrossel = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 20px;


`;

export const ItemPreviewFoto = styled.div`
  text-align: center;
  border: 1px solid #ddd;
  padding: 8px;
  border-radius: 4px;



  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

export const BotaoExcluirFoto = styled.button`
  background-color: red;
  color: white;
  border: none;
  margin-top: 6px;
  cursor: pointer;
  padding: 3px 8px;
  border-radius: 4px;

  
`;

export const BotaoCarrossel = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;

 
`;

export const AreaInputsServico = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;


  input {
  
    width: 70%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
 
   
  }
`;

export const BotaoAdicionarLista = styled.button`
  padding: 10px 10px;
  width: 70%;
  cursor: pointer;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  

 
`;

export const ListaPreviewServicos = styled.div`
 
  display:flex ;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  
  
  


   
`;

export const LinhaServicoItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;


  

  strong {
    font-size: 16px;
    display: block;


  }

  p {
    margin: 4px 0;
    font-size: 13px;
    color: #666;
  }

  span {
    color: green;
    font-weight: bold;
  }
`;

export const BotaoRemoverServico = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const BotaoSalvarTabela = styled.button`
  padding: 12px 24px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  width: 100%;

  
`;

export const ButtonVoltaHome = styled(Link)`

background: red;
text-decoration: none;
padding: 10px;
color: white;
font-family: 700;
border-radius: 5px;
display: flex;
 margin-top: 10px;
`


