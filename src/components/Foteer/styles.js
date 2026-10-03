import styled from "styled-components";


export const Container = styled.div`

width: 100%;
background: rgba(211, 211, 211, 0.7);
height: 30vh;
display: flex;
justify-content: space-evenly;
border-radius: 5px;



div{
    width: 100%;
    margin: 10px 30px;
    display: flex;
    flex-direction: column;
    gap: 10px ;
   

    h2{
        font-size: 14px;
        color: rgb(51, 51, 51);
        
    }

    a,p{
        font-size: 12px;
        color: rgb(111, 111, 111);
        cursor: pointer;
        font-weight: 500;
        overflow: auto;

          


        &:hover{
            color: rgb(0, 0, 0);
            transition: all 0.3s;
            font-size: 14px;
        }

     

        
}
    }

 
`