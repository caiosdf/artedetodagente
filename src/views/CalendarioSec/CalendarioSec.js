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
    const [schedules, setSchedules] = useState([]);
    const [events, setEvents] = useState([]);
    const [page_buttons, setPageButtons] = useState([]);
    const [page, setPage] = useState(1);

    const events_per_page = 6;

 

    useEffect(()=>{
        async function fetchData(){
          const response = await sinosApi.get('/schedules?_sort=date:ASC')
          console.log(response)
          let schedules = response.data.map(item => new Date(item.date).getMonth())
          setSchedules(schedules)
          const todayMonth = new Date().getMonth()
          setCurrentMonth(schedules.indexOf(todayMonth) !== -1 ? todayMonth : R.last(schedules))
        }
        fetchData()
    },[]);


    useEffect(()=>{
        if(project==='sinos'){
            async function fetchData(){
                const eventsCount = await sinosApi.get(`/events/count?schedule.month=${months[current_month]}`);
                let pagesNumber = Math.ceil(eventsCount.data/events_per_page);
                const response = await sinosApi.get(`/events?_sort=date:ASC&schedule.month=${months[current_month]}&_limit=${events_per_page}&_start=${(page - 1)*events_per_page}`);
                response.data.cor = '#7BC942';
                setEvents(response.data ?? []);
                let pageButtons = [];
                for(let x = 1; x <= pagesNumber; x++){
                pageButtons.push(<button onClick={()=>setPage(x)} key={x}>{x}</button>);
                }
                setPageButtons(pageButtons);
              }
              fetchData()
        }
        else if(project==='uno'){
            async function fetchData(){
                const eventsCount = await unoApi.get(`/schedule-events/count?schedule.month=${months[current_month]}`);
                let pagesNumber = Math.ceil(eventsCount.data/events_per_page);
                const response = await unoApi.get(`/schedule-events?_sort=date:ASC&schedule.month=${months[current_month]}&_limit=${events_per_page}&_start=${(page - 1)*events_per_page}`);
                response.data.cor = "#FF7BAC";
                setEvents(response.data ?? []);
                let pageButtons = [];
                for(let x = 1; x <= pagesNumber; x++){
                    pageButtons.push(<button onClick={()=>setPage(x)} key={x}>{x}</button>);
                }
                setPageButtons(pageButtons);
              }
              fetchData()
        }
        else if(project==='bossa'){
            async function fetchData(){
                const eventsCount = await bossaApi.get(`/events/count?month=${months[current_month + 1]}`);
                let pagesNumber = Math.ceil(eventsCount.data/events_per_page);
                const response = bossaApi.get(`/events?month=${current_month + 1}&_limit=${events_per_page}&_start=${(page - 1)*events_per_page}`,'').then(({ data }) => {
                data.cor = '#0071BD'
                setEvents(data);
                });
                let pageButtons = [];
                for(let x = 1; x <= pagesNumber; x++){
                    pageButtons.push(<button onClick={()=>setPage(x)} key={x}>{x}</button>);
                }
                setPageButtons(pageButtons);
            }
            fetchData()
        }
        // else if(project==='geral'){
        //     const eventsCount = await unoApi.get(`/schedule-events/count?schedule.month=${months[current_month]}`);
        //     let pagesNumber = Math.ceil(eventsCount.data/events_per_page);
        //     const response = await unoApi.get(`/schedule-events?_sort=date:ASC&schedule.month=${months[current_month]}&_limit=${events_per_page}&_start=${(page - 1)*events_per_page}`);
        //     setEvents(response.data ?? []);
        //     let pageButtons = [];
        //     for(let x = 1; x <= pagesNumber; x++){
        //         pageButtons.push(<button onClick={()=>setPage(x)} key={x}>{x}</button>);
        //     }
        //     setPageButtons(pageButtons);
        // }

    },[current_month, project, page]);

    const index = schedules.indexOf(current_month);
    const prevEnabled = index > 0;
    const nextEnabled = index < schedules.length - 1;
    
    function nextMonth() {
        if(nextEnabled) setCurrentMonth(schedules[index+1]);
    }

    function prevMonth() {
        if(prevEnabled) setCurrentMonth(schedules[index-1]);
    }

    let pageIndex = page;
    let prevPageEnabled = pageIndex > 1;
    let nextPageEnabled = pageIndex < page_buttons.length;

    function nextPage(){
        if(nextPageEnabled) setPage(pageIndex + 1);
    }

    function prevPage(){
        if(prevEnabled) setPage(pageIndex - 1);
    }



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
        <section id="calendario" className="full-section-calendario">
            <div className="header">
                <div className="img-container">
                    <img className="img-calendario" src={imgCalendario} alt=""/>
                </div>
                <div className="toolbar">
                    <div className="months-nav">
                        <button onClick={()=>prevMonth()} style={{opacity: prevEnabled ? 1 : 0.5}}>◀</button>
                        <div className="span-container">
                            <span>{months[current_month] || `...`}</span>
                        </div>
                        <button onClick={()=>nextMonth()} style={{opacity: nextEnabled ? 1 : 0.5}}>▶</button>
                    </div>
                    <div className="projects-nav">
                        <button className="geral-button" onClick={()=>{
                            if(project !== 'geral') setPage(1);
                            setProject('geral');
                            }} >GERAL</button>
                        <button className="sinos-button" onClick={()=>{
                            if(project !== 'sinos') setPage(1);
                            setProject('sinos')
                            }} >SINOS</button>
                        <button className="bossa-button" onClick={()=>{
                            if(project !== 'bossa') setPage(1);
                            setProject('bossa')
                            }} >BOSSA CRIATIVA</button>
                        <button className="uno-button" onClick={()=>{
                            if(project !== 'uno') setPage(1);
                            setProject('uno')
                            }} >UM NOVO OLHAR</button>
                    </div>
                </div>
            </div>
            <div className="agenda-feed">
                {events.map((evento,i) => {
                const date = fdate(evento.date)
                return (
                    <article key={`agenda-${current_month}-${i}`}>
                    <div className="agenda-item">
                        <div className="agenda-date">
                            <h3 style={{
                                color:`${events.cor}`
                            }}>{date.day}</h3>
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
            <div className="agenda-footer">
                <div className="agenda-page-buttons">
                    <button onClick={()=>prevPage()} style={{opacity: prevPageEnabled ? 1 : 0.5}}>◀</button>
                    {page_buttons}
                    <button onClick={()=>nextPage()} style={{opacity: nextPageEnabled ? 1 : 0.5}}>▶</button>
                </div>
            </div>
        </section>
    )

}

export default Calendario;