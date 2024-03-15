import styled from "styled-components";

export const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

export const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height:100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`

export const Center = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;

`

export const LogoOne = styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display: block;
    width: 100%;
`

export const SignUpLink = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover{
        background-color: #0483ee
    }
`


export const Description = styled.p`
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`

export const LogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`

export const BgImage = styled.div`
    height:100%;
    position: absolute;
    background-position: top;
    background-image: url("/images/login-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`