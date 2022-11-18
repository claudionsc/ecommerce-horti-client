import styled from "styled-components";


 const CarrinhoBtnStyle = styled.button`
    background-color:rgb(24, 94, 39);
    color: white;
    border: none;
    width: 80%;
    height: 40%;
    transition: 200ms ease-in-out;

    &:hover{
        cursor: pointer;
        transform: scale(110%);
    }
`
export const CarrinhoBtn = ({children}) => {

    return(
        <CarrinhoBtnStyle>{children}</CarrinhoBtnStyle>
    )
}
