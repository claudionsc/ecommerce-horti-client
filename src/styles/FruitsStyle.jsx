import styled from "styled-components";

export const FruitsStyleForm = styled.form`
    
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
    

    /* column-gap: 3rem; */

`

export const Fruit = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 15vw;
    height: 40vh;
    margin: 25px 0px;
    padding-top: 10px;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    transition: all ease 100ms;
    

    &:hover{
        /* From https://css.glass */
    background: rgba(255, 255, 255, 0.53);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 1);
    
    }
`

export const CounterCart = styled.div`
    
    width: 90%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`