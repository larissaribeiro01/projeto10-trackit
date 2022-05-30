import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useContext} from"react"
import Percentage from "./Percentage";

export default function Menu () {
    const {percentage}=useContext(Percentage);
    return (
        <Container>
                <Link to="/habitos"><p>Hábitos</p></Link>
                <Link to="/hoje">
                    <Bar style={{width: 90 }}>
                        <CircularProgressbar
                            value={percentage}
                            text="hoje"
                            background
                            backgroundPadding={6}
                            valueStart={0}
                            valueEnd={100}
                            duration={1.4}
                            styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })} />
                    </Bar>
                </Link>
                <Link to="/historico"><p>Histórico</p></Link>
            </Container>        
    )
}


const Container = styled.div`
    position: fixed;
    bottom:0;
    left:0;
    width: 100vw;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
`

const Bar = styled.div`
   position: relative;
   bottom:20px;
`


    
