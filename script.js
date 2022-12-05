// write code below


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// ccc42a67205d1aaec59a456d914b68be

document.querySelector(".btn").addEventListener('click', ()=>{
  let city = document.querySelector('#search').value

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ccc42a67205d1aaec59a456d914b68be`)
  .then((res) =>{
    return res.json();
  })
  .then((wdata) =>{
  
    // console.log(wdata.main.temp);
  
    document.querySelector('#location').innerText = city;

    document.querySelector('.desc').innerText = wdata.weather[0].description

    document.querySelector('.c').innerText = `${wdata.main.temp + ' c'}`  
  })

})