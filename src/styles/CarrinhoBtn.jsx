import styled from "styled-components";


 const CarrinhoBtnStyle = styled.input`
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
export const CarrinhoBtn = ({children, onClick, ...props}) => {

    return(
        <CarrinhoBtnStyle onClick={onClick} {...props}>
            {/* {console.log(props)} */}
        </CarrinhoBtnStyle>
    )
}
