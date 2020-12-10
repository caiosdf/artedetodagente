const fdate = (d) => {
    const date = new Date(d)
    const dateTimeFormat = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'long', day: '2-digit', timeZone: 'UTC' })
    const [{ value: day },,{ value: month },,{ value: year }] = dateTimeFormat.formatToParts(date) 
    return {day,month,year}
}

function scroll(Id){
  const element = document.querySelector(Id);
  element.scrollIntoView({behavior: 'smooth'});
}
  
export {fdate, scroll}