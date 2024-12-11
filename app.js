const years = document.querySelector('.years')
const mounts = document.querySelector('.mounts')
const days = document.querySelector('.days')
//?------------------------------------------
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
//?------------------------------------------
setInterval(()=>{
    const date = new Date()
    years.innerHTML = date.getFullYear()
    mounts.innerHTML = date.getMonth() + 1
    days.innerHTML = date.getDate() 
    hours.innerHTML = date.getHours()
    minutes.innerHTML = date.getMinutes()
    seconds.innerHTML = date.getSeconds()
},1000)
















