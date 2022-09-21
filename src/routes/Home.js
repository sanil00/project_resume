import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Auth from "components/Auth"
import { Link } from "react-router-dom"
import Slider from "components/Slider"

const NavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
`
const SliderContainer = styled.div`
    width: 100%;
`
const LinkedButton = styled.button`
    width: 200px;
    border-radius: 20px;
`
const AuthBox = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
`
const LinkBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const Home = ({ userObj }) => {
    return (
        <div className="container" style={{ marginTop: 200 }}>
            <NavigationContainer>
                <AuthBox>
                    <Auth />
                </AuthBox>
                <LinkBox>
                    <Link to="/ability">
                        <LinkedButton>Ability</LinkedButton>
                    </Link>
                    <Link to="/project">
                        <LinkedButton>Project</LinkedButton>
                    </Link>
                </LinkBox>
            </NavigationContainer>
            <SliderContainer>
                <Slider />
            </SliderContainer>
        </div>
    )
}
export default Home
