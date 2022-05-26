import logo from "../assets/logo.png";
import styled from 'styled-components';
import Loading from "./Loading";
import Data from "./Data";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import {ThreeDots} from 'react-loader-spinner';


export default function Login () {  
    const {Load, setLoad} = useContext(Loading);
    const {userData, setUserData} = useContext(Data);
    const navigate=useNavigate();

    function processLogin (event) {
        event.preventDefault();
        setLoad(true)

        const dados = { email: userData.email, password: userData.password}
        const URL ='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const promise = axios.post(URL, dados)
        promise.then(({data}) =>{
            setUserData({...userData, email:data.email, password:data.password , name:data.name, image:data.image , token: data.token })
            const serializedDataString = JSON.stringify({token: data.token, image:data.image})
            localStorage.setItem("userData", serializedDataString)
            navigate("/hoje")
            setLoad(false)
        })
        promise.catch(({response}) => {
            console.log(response)
            setLoad(false)
            setUserData({...userData,email:"", password:"" , name:"", image:"" , token:""})
            alert("Login ou senha inválidos")
            })          
        }
    

    

    return (
        <>
            <Container>
                <Logo src={logo} alt="logo" />
                {Load? 
                    <Form onSubmit={processLogin}>
                        <Input type="email" id="email" value={userData.email} disable required onChange={n => setUserData({...userData, email: n.target.value})} placeholder="email"></Input>
                        <Input type="password" id="password" value={userData.password} disable required onChange={n => setUserData({...userData, password: n.target.value})} placeholder="password"></Input>
                        <Button disabled>
                            <ThreeDots
                                height="60"
                                width="60"
                                color='#FFFFFF'
                                ariaLabel='loading'
                            />
                        </Button>
                    </Form> 
                    :<Form onSubmit={processLogin}>
                        <input type="email" id="email" value={userData.email} disable required onChange={n => setUserData({...userData, email: n.target.value})} placeholder="email"></input>
                        <input type="password" id="password" value={userData.password} disable required onChange={n => setUserData({...userData, password: n.target.value})} placeholder="password"></input>
                        <button>Entrar</button>
                    </Form>}
                <Link to="/cadastro"><Enter>Não tem uma conta? Cadastre-se</Enter></Link>

            </Container>
        </>
    )
}


const Container = styled.div `
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`
const Logo = styled.img `
    margin-top: 68px;
    width:180px;
`
const Form = styled.form `
    margin-top: 33px;
    display:flex;
    flex-direction: column;
    box-sizing: border-box;

    input {
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom:6px;
        padding: 10px;
        ::placeholder {color:#DBDBDB};

    }

    button {
        border: none;
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
  
`
const Input =styled.input `
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 6px;
    padding: 10px;
    background-color: ${props=>props.disable ? "#F2F2F2":"#FFFFFF"};

    ::placeholder {
        color: ${props=>props.disable ? "#AFAFAF":"#DBDBDB"};
    }
`
const Button = styled.button`
    border: none;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity:${props => props.disabled ? "0.5" : ""};  
`

const Enter = styled.p`
    margin-top:25px;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`


    