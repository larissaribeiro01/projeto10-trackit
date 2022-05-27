import styled from "styled-components";
import {BsTrash} from "react-icons/bs";
import axios from "axios";

const daysList = [
    { id:0, name:"D" },
    { id:1, name:"S" },
    { id:2, name:"T" },
    { id:3, name:"Q" },
    { id:4, name:"Q" },
    { id:5, name:"S" },
    { id:6, name:"S" }
]

export default function Habit (props) {
    const {name, days, id, fetchHabits} = props;
    const userDataLocalStorage = localStorage.getItem("userData");
    const unserializedData = JSON.parse(userDataLocalStorage);
    const tokenStorage = unserializedData.token;

    function processDelet() {
        window.confirm("Tem certeza que deseja excluir?")

        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        }

        const URL='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/';
        const promise = axios.delete(`${URL}${id}`, config);
        promise.then((response)=>{fetchHabits()})
        promise.catch(n=> console.log(n))
    }
    
    return (
        <Container>
            <Top>
                <Description>
                    {name}
                </Description>
                <Icone><BsTrash onClick={()=> processDelet()} /></Icone>
            </Top>
            <Days>
                {daysList.map(day=>{
                    return (
                        days.includes(day.id)?<Day key={day.id}>{day.name}</Day>
                        :<Day color key={day.id}>{day.name}</Day>
                    )
                })}
            </Days>
        </Container>
    )
}


const Container = styled.div`
    width: 90vw;
    min-height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 8px;
    padding: 10px;
`

const Top = styled.div `
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-itens: center;
`
const Icone = styled.div `
    cursor: pointer;
`
const Description = styled.p `
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    width: 90%;
    word-wrap: break-word;
`

const Days= styled.div `
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-itens: center;
`
const Day = styled.span `
    margin-top: 8px;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 4px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${ props => props.color ? "#DBDBDB" : "#FFF"};
    background-color: ${ props => props.color ? "#FFF" : "#CFCFCF"};   
`