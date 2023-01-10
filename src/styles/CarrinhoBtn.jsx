import styled from "styled-components";


 const CarrinhoBtnStyle = styled.input`
    background-color:rgb(24, 94, 39);
    color: white;
    border: none;
    height: 2rem;
    transition: 200ms ease-in-out;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        transform: scale(110%);
    }
`
export const CarrinhoBtn = ({children, onClick, width, ...props}) => {

    return(
        <CarrinhoBtnStyle  onClick={onClick} {...props} />
    )
}
