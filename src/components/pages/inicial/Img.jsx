import styled from 'styled-components'

export function Img({src}){
    return(
        <StyleImg src={src}/>
    )
}

const StyleImg = styled.img`
    width: 100px;
    height: 100px;

`