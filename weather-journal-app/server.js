// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { request, response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = process.env.PORT || 5000;
const server = app.listen(port, ()=>{console.log(`Server running on localHost: ${port}`)});



// GET route returns the projectData
app.get('/all',(req, res)=>{
    res.send(projectData);
});


// POST route to add incoming data to projectData
app.post('/api', (request, response)=>{
    console.log('I got request');
    console.log(request.body);
    const comingData = request.body;
    
    projectData.temperature = comingData.temperature;
    projectData.date = comingData.date;
    projectData.content = comingData.feeling;

    //dataBase.push(dataObject);
    console.log(projectData);
    response.send(projectData)
})
