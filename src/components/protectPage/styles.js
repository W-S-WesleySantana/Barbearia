import styled from "styled-components";


export const Container = styled.div`
max-width: 350px;
margin: 80px auto;
padding: 20px;
text-align: center;
font-family: sans-serif;

form {
    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
    }

    button {
        width: 100%;   
    padding: 10px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    }
}
`