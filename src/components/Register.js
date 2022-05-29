import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Image from "../assets/logo.png"
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';

export default function Register(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [load, setLoad] = useState(false)
    const [disable, setDisable] = useState(false)

    function onLoad(){
        setLoad(true)
        setDisable(true)
    }

    function offLoad(){
        setLoad(false)
        setDisable(false)
    }

    function toRegister(e){
        e.preventDefault()
        onLoad()

        const promesse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
        {
            email: email,
            name: name,
            image: image,
            password: password
        })
        promesse.then(response => {
            alert(response.data)
            navigate('/')
        })
        promesse.catch(error => {
            alert(error.response)
            offLoad()
        })
    }

    return(
        <Main>
            <Img src={Image}/>

            <Form onSubmit={toRegister}>
                <Input type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        disabled={disable}/>

                <Input  type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        disabled={disable}/>

                <Input type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        disabled={disable}/>

                <Input  type="text"
                        placeholder="Foto"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        required
                        disabled={disable}/>
                        
                <Button type="submit" disabled={disable}>
                    {!load ? 'Cadastrar' : <ThreeDots color='#FFFFFF' height={40} width={40}/>}
                </Button>
            </Form>

            <Label onClick={()=> navigate('/')}>
                Já tem uma conta? Faça login!
            </Label>
        </Main>
    )
}



 const Input = styled.input`
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
    ::placeholder {color:#DBDBDB}
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

 const Img = styled.img`
    width: 180px;
    heigth: 180px;
    margin-top: 68px;
    margin-bottom: 50px
`
const Form = styled.form`
    margin-top: 13px;
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
`
const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width:100%;
    height: 100vh;
`

const Label = styled.label`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`
