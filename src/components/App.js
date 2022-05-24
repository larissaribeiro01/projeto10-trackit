import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "../assets/reset.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Today";
import Habits from "./Habits";
import History from "./History";
import GlobalStyle from "./globalStyle";

export default function App () {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/historico" element={<History />} />
                </Routes>
            </BrowserRouter>
        </> 
    )
}