// write code below
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// f7838a8ed6bf60f7b0d0894e4091f02a

document.querySelector(".btn").addEventListener("click", ()=>{
    let city = document.querySelector("#search").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9563f9238e96fa63b4136cf97e47f74a`)
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        document.querySelector("#location").textContent = data.name
        document.querySelector(".desc").textContent = data.weather[0].description
        document.querySelector(".c").textContent = data.main.temp
    })
})
