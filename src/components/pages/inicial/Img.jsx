import styled from 'styled-components'

export function Img({src}){
    return(
        <StyleImg src={src}/>
    )
}

const StyleImg = styled.img`
    width: 50%;
    height: 50%;

`