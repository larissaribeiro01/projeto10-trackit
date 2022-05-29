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
import HabitCont from "./HabitCont";
import Percentage from "./Percentage";
import TodayHabitsCont from "./TodayHabitsCont";
import HabitsStatusCont from "./HabitsStatusCont";

export default function App () {
    const [Load, setLoad] = useState(false);
    const [userData, setUserData] = useState({ email:"", password:"" , name:"", image:"" , token:""});
    const [userHabits, setUserHabits] = useState([])
    const [percentage, setPercentage] = useState(0);
    const [todaysHabits, setTodaysHabits] = useState([])
    const [HabitsStatus, setHabitsStatus] = useState([])

    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const tokenStorage = unserializedData?.token

    useEffect(() => fetchTodaysHabits(), [])    

    function fetchTodaysHabits(){
        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        }
        const URL='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const promise = axios.get(URL, config)
        promise.then( ({data}) =>{
            const selectStatus = data.map((habit) => habit.done)
            const done = selectStatus.filter((status) => status === true)
            const ActualPercentage = ((done.length/(selectStatus.length || 1))*100).toFixed(0)
            setTodaysHabits(data)
            setHabitsStatus(selectStatus)        
            setPercentage(ActualPercentage)
        })
        promise.catch ((e)=> console.log(e))
    } 
   


    return (
        <>
            <BrowserRouter>
                <GlobalStyle>
                    <Loading.Provider value={{Load, setLoad}}>
                        <Data.Provider value={{userData, setUserData}}>
                            <HabitCont.Provider value={{userHabits, setUserHabits}}>
                                <Percentage.Provider value={{percentage, setPercentage}}>
                                    <TodayHabitsCont.Provider value={{todaysHabits, setTodaysHabits}}>
                                        <HabitsStatusCont.Provider value={{HabitsStatus, setHabitsStatus}}>
                                            <Routes>
                                                <Route path="/" element={<Login />} />
                                                <Route path="/cadastro" element={<SignUp />} />
                                                <Route path="/hoje" element={<Today />} />
                                                <Route path="/habitos" element={<Habits fetchTodaysHabits={fetchTodaysHabits}/>} />
                                                <Route path="/historico" element={<History />} />
                                            </Routes>
                                        </HabitsStatusCont.Provider>
                                    </TodayHabitsCont.Provider>
                                </Percentage.Provider>
                            </HabitCont.Provider>
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
