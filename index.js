let nav = document.querySelector('nav')
let menu_btn = document.querySelector('.menu')

menu_btn.addEventListener('click', ()=>{
    nav.classList.toggle('slide')
})






let hours_span = document.querySelector('.hours')
let minutes_span = document.querySelector('.minutes')
let seconds_span = document.querySelector('.seconds')
let day_span = document.querySelector('.day')
let days = ""
let month_span = document.querySelector('.month')
let months = ""
let date_span = document.querySelector('.date')
let years_span = document.querySelector('.year')
let footer = document.querySelector('.footerdate')


setInterval(()=>{
    let time = new Date()
    let hrs = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let day_num = time.getDay()
    let month = time.getMonth()
    let dates = time.getDate()
    let years = time.getFullYear()

    


    if(hrs <= 9){
        hours_span.innerHTML = "0" + hrs
    }else(
        hours_span.innerHTML = hrs 
    )

    if(min <= 9){
        minutes_span.innerHTML = "0" + min
    }else(
        minutes_span.innerHTML = min
    )

    if(sec <= 9){
        seconds_span.innerHTML = "0" + sec
    }else(
        seconds_span.innerHTML = sec
    )


    //    days 
    if(day_num == 0 ){
        days = "Sunday"

    }else if(day_num == 1){
        days = "Monday"
    }else if(day_num == 2){
        days = "Tuesday"
    }else if(day_num == 3){
        days = "Wednesday"
    }else if(day_num == 4){
        days = "Thursday"
    }else if(day_num == 5){
        days = "Friday"
    }else if(day_num == 6){
        days = "Saturday"
    }


    day_span.innerHTML = days



    //    months

    if(month == 0){
        months = "January"
    }else if(month == 1){
        months = "Feburary"
    }
    else if(month == 2){
        months = "March"
    }else if(month == 3){
        months = "April"
    }else if(month == 4){
        months = "May"
    }else if(month == 5){
        months = "June"
    }else if(month == 6){
        months = "July"
    }else if(month == 7){
        months = "August"
    }else if(month == 8){
        months = "September"
    }else if(month == 9){
        months = "October"
    }else if(month == 10){
        months = "November"
    }else if(month == 11){
        months = "December"
    }



    month_span.innerHTML = months
    
    date_span.innerHTML = dates

    years_span.innerHTML = years

    footer.innerHTML = years + "."

    

    



},1000)