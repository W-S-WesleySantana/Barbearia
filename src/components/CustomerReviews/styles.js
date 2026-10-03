import styled from 'styled-components';

export const ConteinerForm = styled.div`
  display: flex;
  gap: 30px;
  width: 90%;
  max-height: 70vh;
  border-radius: 10px;
  margin: 20px auto; 
  padding: 20px ;
  font-family: sans-serif;
  font-size: 12px;


 
  h3 {
    margin-bottom: 10px;
    color: #333;
  }

  @media (max-width:450px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top:20px ;
  }
`;

export const RegistrationForm = styled.div`
  min-width: 20vw;
  height: 300px;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

 





  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius:10px ;
    padding: 10px;
  


  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }

  input[type="text"],
  textarea {
    width: 95%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 12px;
  }

  button[type="submit"] {
    padding: 8px;
    background-color: #333;
    color: #fff;
    width: 95%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-size: 10px;
    transition: background 0.2s;

    &:hover {
      background-color: #555;
    }
  }
`;

export const ViewReviews = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 48vh;
  overflow-y: auto;
  word-break: break-word;

  &::-webkit-scrollbar {
    width: 5px;
  
  }

  &::-webkit-scrollbar-track {
    background:rgb(255, 255, 255);
  }

  &::-webkit-scrollbar-thumb {
    background: #ffffff;
    border: none;
  }

  scrollbar-color: #dcdcdc #ffffff;
  scrollbar-width: thin;
`;

export const ContainerStar = styled.div`
  display: flex;
  gap: 4px;
`;

export const EstrelaSpan = styled.span`
  font-size: 24px;
  transition: color 0.2s;
  cursor: ${props => props.$interativo ? 'pointer' : 'default'};
  color: ${props => props.$ativa ? '#FFD700' : '#CCCCCC'};
`;

export const ItemAvaliacaoBox = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const ItemAvaliacaoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const ItemAvaliacaoNome = styled.strong`
  font-size: 16px;
  color: #333;
`;

export const ItemAvaliacaoTexto = styled.p`
  margin: 5px 0 0 0;
  color: #555;
  font-style: italic;
`;
