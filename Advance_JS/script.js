//Weather Api

async function getCity(city) {
  try {
    let apiKey = ` `;
    let data =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`);

if(!data.ok){
  throw new Error("Please enter the correct city and Something went wrong! ")
}
    let result = await data.json();
    console.log(` The temperature of ${city} is ${ Math.floor(result.main.temp)} °C`);

    console.log()
  } catch (err) {
    console.log(err.message);
  }
}

getCity("Bengaluru");
