import styled from "styled-components";


 const CarrinhoBtnStyle = styled.button`
    background-color:rgb(24, 94, 39);
    color: white;
    border: none;
    height: 2rem;
    transition: 200ms ease-in-out;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
    }
`
export const CarrinhoBtn = ({ onClick, value, ...props}) => {

    return(
        <CarrinhoBtnStyle  onClick={onClick} {...props}>{value}</CarrinhoBtnStyle>
    )
}
