import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

import "../assets/reset.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Today";
import Habits from "./Habits";
import History from "./History";
import Loading from "./Loading";
import Data from "./Data";

export default function App () {
    const [Load, setLoad] = useState(false);
    const [userData, setUserData] = useState({ email:"", password:"" , name:"", image:"" , token:""});

    return (
        <>
            <BrowserRouter>
                <GlobalStyle>
                    <Loading.Provider value={{Load, setLoad}}>
                        <Data.Provider value={{userData, setUserData}}>
                            <Routes>
                                <Route path="/" element={<Login />} />
                                <Route path="/cadastro" element={<SignUp />} />
                                <Route path="/hoje" element={<Today />} />
                                <Route path="/habitos" element={<Habits />} />
                                <Route path="/historico" element={<History />} />
                            </Routes>
                        </Data.Provider>
                    </Loading.Provider>
                </GlobalStyle>
            </BrowserRouter>

        </> 
    )
}

const GlobalStyle = styled.div `
    font-family: 'Lexend Deca'
`
