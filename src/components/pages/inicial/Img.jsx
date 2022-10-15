import img from '../../img/maca.jpg'
import styled from 'styled-components'

export function Img(){
    return(
        <StyleImg src={img}/>
    )
}

const StyleImg = styled.img`
    width: 100px;
    height: 100px;

`