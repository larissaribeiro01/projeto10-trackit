import styled from "styled-components"
import 'react-circular-progressbar/dist/styles.css';
import Calendar from 'react-calendar';



import Header from "./Header";
import Menu from "./Menu";
import "./../assets/calendar.css"


function History(){   

    function tileClassName({ date, view }) {
        
        // if (view === 'month') {
        //   // Check if a date React-Calendar wants to check is on the list of dates to add class to
        //   if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
        //     return 'myClassName';
        //   }
        // }
    }

    return( <>
        <Main >
            <Header />           
            <Title >
                <p>Histórico</p>
            </Title >
             <Calendar              
             calendarType="US" 
             locale="pt-br"
             tileClassName={tileClassName}  
             />  
                             
        </Main>
        <Menu /> 
        </>
    )
}

export default History;
  
const Main = styled.div`
    background-color: #F2F2F2;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;   
    align-items: center;
`
const Title = styled.div`
    margin-top:110px;
    width: 100vw;
    padding-left: 5vw;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`
