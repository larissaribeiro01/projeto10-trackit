import styled from "styled-components";

export default function Header () {
    const userData = localStorage.getItem('userData');
    const unserializedData=JSON.parse(userData);
    const src= unserializedData.image

    return (
        <Top>
            <Logo>TrackIt</Logo>
            <Img src={src} />
        </Top>
    )
}

const Top = styled.div `
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 18px;
`

const Logo = styled.p `
    font-family:'Playball';
    font-style:normal;
    font-weight:400;
    font-size: 39px;
    color: #FFFFFF;
    line-height: 49px;
`

const Img = styled.img `
    width: 51px;
    height: 51px;
    background.url(image.png);
    border-radius: 98.5px;
`