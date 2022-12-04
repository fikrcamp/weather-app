// write code below

document.querySelector(".btn").addEventListener('click', ()=>{
    let city = document.querySelector("#search").value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f162b4ce2c9943b3c6b16f0a9645d25`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        document.querySelector("#location").innerHTML = data.name
       document.querySelector(".desc").innerHTML = data.weather[0].description
       document.querySelector(".c").innerHTML = data.main.temp
    })
})