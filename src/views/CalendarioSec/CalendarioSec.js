import React, { useState, useEffect } from 'react';
import './CalendarioSec.css';
import {sinosApi, bossaApi, unoApi} from '../../services/api';
import * as R from 'ramda'
import imgCalendario from '../../assets/img/calendario.jpg';
import {fdate} from '../../util';

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function Calendario(){

    const [project, setProject] = useState('sinos');
    const [current_month, setCurrentMonth] = useState();
    const [schedules_sinos, setSchedulesSinos] = useState([]);
    const [events_sinos, setEventsSinos] = useState([]);
    const [current_month_bossa, setCurrentMonthBossa] = useState();
    const [schedules_bossa, setSchedulesBossa] = useState([]);
    const [events_bossa, setEventsBossa] = useState([]);
    const [current_month_uno, setCurrentMonthUno] = useState();
    const [schedules_uno, setSchedulesUno] = useState([]);
    const [events_uno, setEventsUno] = useState([]);

    useEffect(()=>{
        async function fetchDataSinos(){
          const response = await sinosApi.get('/schedules?_sort=date:ASC')
          let schedules = response.data.map(item => new Date(item.date).getMonth())
          setSchedulesSinos(schedules)
          const todayMonth = new Date().getMonth()
          setCurrentMonth(schedules.indexOf(todayMonth) !== -1 ? todayMonth : R.last(schedules))
        }
        fetchDataSinos()
    },[]);
    console.log(schedules_sinos)

    useEffect(()=>{
        async function fetchDataSinos(){
          const response = await sinosApi.get(`/schedules?month=${months[current_month]}`)
          setEventsSinos(response.data[0]?.events.slice(0,6) ?? [])
        }
        fetchDataSinos()
    },[current_month])

    
    function nextMonth() {
        if(nextEnabled) setCurrentMonth(schedules_sinos[index+1])
    }

    function prevMonth() {
        if(prevEnabled) setCurrentMonth(schedules_sinos[index-1])
    }

    const index = schedules_sinos.indexOf(current_month)
    const prevEnabled = index > 0
    const nextEnabled = index < schedules_sinos.length - 1

    // useEffect(()=>{
    //     async function fetchDataUno(){
    //        const response = await unoApi.get('/schedules?_sort=date:ASC')
    //       let schedules = response.data.map(item => new Date(item.date).getMonth())
    //       setSchedulesUno(schedules)
    //       const todayMonth = new Date().getMonth()
    //       setCurrentMonthUno(schedules.indexOf(todayMonth) !== -1 ? todayMonth : R.last(schedules))
    //     }
    //     fetchDataUno()
    //   },[project])
    return(
        <section className="full-section-calendario">
            <div className="header">
                <div className="img-container">
                    <img className="img-calendario" src={imgCalendario} />
                </div>
                <div className="toolbar">
                    <div className="months-nav">
                        <button onClick={()=>prevMonth()} style={{opacity: prevEnabled ? 1 : 0.5}}>◀</button>
                        <span>{months[current_month] || `...`}</span>
                        <button onClick={()=>nextMonth()} style={{opacity: nextEnabled ? 1 : 0.5}}>▶</button>
                    </div>
                    <div className="projects-nav">
                        <button className="sinos-button" onClick={()=>setProject('sinos')} >SINOS</button>
                    </div>
                </div>
            </div>
            <div className="agenda-feed">
                {events_sinos.map((evento,i) => {
                const date = fdate(evento.date)
                return (
                    <article key={`agenda-${current_month}-${i}`}>
                    <div className="agenda-item">
                        <div className="agenda-date">
                            <h3>{date.day}</h3>
                        </div>
                        <div className="agenda-content">
                            <h3>{evento.time} | {evento.title}</h3>
                            <p>{evento.text}</p>
                        </div>
                    </div>
                    </article>
                )
                })}
            </div>
        </section>
    )

}

export default Calendario;