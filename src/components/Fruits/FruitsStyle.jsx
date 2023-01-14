import styled from "styled-components";

export const FruitsStyleDiv = styled.div`
    
    width: 80vw;
    height: auto;
    position: relative;
    display: flex;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    box-shadow: 20px 25px 20px;
    margin-top: 150px;
    margin-bottom: 100px;
    background: rgba( 245, 244, 244, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( black 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 1.5px );
    border-radius: 10px;

`

export const Fruit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 15vw;
    height: 40vh;
    margin: 25px 0px;
    padding-top: 10px;
    background-color: white;
    border-radius: 16px;

    &:hover{
        scale: 105%;
    
    }
`