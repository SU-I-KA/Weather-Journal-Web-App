# Weather-Journal-Web-App Project
    A weather app developed using OpenWeatherMap API.

## Overview
    This project done by creating an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Features
    - Displays the weather forecast of any location across the world by entering the zip code 
        beside the country code otherwise it will assume that this zip code located in the usa.
    - It also enables us to get the current date.
    - Gives the user the ability to submit how he feel and display it with the weather data.


## Building the Project

    - started by Node is installed from the terminal. Install the packages Express, 
        Body-Parser, and Cors from the terminal and include them in server.js.

    - configuring express to use body-parser as middle-ware.

    - I Create a server running on the port of 5000. I also added a callback function 
        to it to test if the server run.

    - I added a GET route ('/all') that returns the projectData object that
        represent the endpoint.

    - I added a POST route ('/api') that adds incoming data to projectData.

    - I Acquired an API credentials from OpenWeatherMap website.

    - in the client-side I used my API credentials to create global variables at the top of app.js code.

    - I Wrote an async function that uses fetch() to make a GET request to the OpenWeatherMap API.

    - Creating an event listener for the element with the id: (generate), with a callback function 
        to execute when it is clicked.

    - Inside that callback function I called the async GET request with the parameters:
        + base url
        + user entered zip code (see input in html with id zip)
        + personal API key

    - I wrote another async function to make a POST request to add the API data, 
        as well as data entered by the user, to the app.

    - I Wrote another async function that is called after the completed POST request. 
        This function should retrieve data from the app, select the necessary elements on the DOM (index.html), 
            and then update their necessary values to reflect the dynamic values for:

        + Temperature
        + Date
        + User input
    
    - Responsive design.
        + I used CSS media queries to make it fit for laptops, tablets and mobiles.
        + i used flex box for a responsive design.

## Extras
    - I converted the temperature value from kelvin to celsius.
    - The date format is as follows: DD.MM.YYYY .
