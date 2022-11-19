import styled from "styled-components";

export const StyleDivBtn = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
`

export const StyleBtn = styled.button`
    background-color: whitesmoke;
    border: none;
    width: 25%;
    height: 100%;
    text-align: center;
    


    &:hover{
        cursor: pointer;
        transform: scale(110%);
    }

`
export const StyleNum = styled.span`
    color: white;
    background-color: #a6a6a6;
    border: none;
    width: 50%;
    padding: 2px;
    text-align: center;
    

`