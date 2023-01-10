import styled from 'styled-components'

export function Img({src, ...props}){
    return(
        <StyleImg {...props} src={src}/>
    )
}

const StyleImg = styled.img`
    width: 50%;

`