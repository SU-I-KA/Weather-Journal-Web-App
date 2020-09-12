/* Global Variables */
//let baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=799a76459be5098429bade709f796055';

// Create a new date instance dynamically with JS
let d = new Date();
let currentDay = ("0" + d.getDate()).slice(-2);
let currentMonth = ("0" + (d.getMonth() + 1)).slice(-2);

let newDate = `${currentDay}.${currentMonth}.${d.getFullYear()}`;

console.log(newDate);

// fetch data using API
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const zipCode =  document.getElementById('zip').value;
  const feel =  document.getElementById('feelings').value;
  getWeather(baseURL,zipCode, apiKey)
  // New Syntax!
  .then(function(data){
    // Add data
    let temp = Math.round(data.main.temp - 273);
    postData('/api', {temperature: `${temp}°C`, date: newDate, feeling: feel})
  })
  .then(() => updateUI());
  
}

// Make a GET request to the OpenWeatherMap API
const getWeather = async (baseURL, zipCode, key)=>{

  const res = await fetch(baseURL+zipCode+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;

  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const postData = async (url='', data={})=>{
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  try {
    // converting data to json format
    const newData = await response.json();
    console.log(newData);
    return newData
  }
  catch(error){
    console.log("error", error);
    // appropriately handle the error
  }
}


const updateUI = async () => {
  // fetch data from the endpoint
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    console.log(allData);
    // updating the values of this elements with the retreived data 
    document.getElementById('temp').innerHTML = allData.temperature;
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('content').innerHTML = allData.content;

  }
  catch(error){
    console.log("error", error);
    // appropriately handle the error
  }
}