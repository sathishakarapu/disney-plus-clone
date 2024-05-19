import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import NewToDisney from './NewToDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Trending from './Trending'
import Viewers from './Viewers'
import image1 from "../images/home-background.png";

const Home = () =>{
    return(
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <NewToDisney/>
            <Originals/>
            <Trending/>
        </Container>
    )
}

export default Home


const Container = styled.main`

    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 5px 15px;
    
    &:after{
        background: url(${image1}) center center/cover no-repeat fixed ;        
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;