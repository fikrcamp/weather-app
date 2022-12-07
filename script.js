// write code below

document.querySelector(".btn").addEventListener('click', function(){
    let city = document.querySelector("#search").value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c7b446c42bf87e27921e3e474398249`)
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
        document.querySelector("#location").innerText = data.name
        document.querySelector(".desc").innerHTML = data.weather[0].description 
        document.querySelector(".c").innerText = data.main.temp
    })
    .catch(error =>{
        // handling error
    })
})