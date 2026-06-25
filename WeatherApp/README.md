# Weather App

This project is a responsive, client side weather application designed to provide real time weather information for cities around the world. It was created as part of my **Web Development** learning journey following the [The Odin Project](https://www.theodinproject.com) curriculum.

Link to Project 👉 **[Weather App](https://anurag-2708.github.io/Web-Development/WeatherApp/index.html)**

## Key Features

* **Real Time Weather Data:** Search any city worldwide to retrieve current weather conditions using the OpenWeather API.
* **Automatic Location Detection:** Detects the user's approximate location through IP geolocation and displays the local weather on page load.
* **3-Hour Forecast:** Displays the next eight 3-hour weather forecasts, including temperature, humidity, and weather conditions.
* **Comprehensive Weather Metrics:** Shows wind speed, humidity, atmospheric pressure, visibility, sunrise, and sunset times.
* **Modern Responsive Interface:** Features a clean glassmorphism-inspired UI with a scenic background and responsive layout for an intuitive user experience.

## Technical Implementation

The primary focus of this project was mastering **asynchronous JavaScript**, **REST API integration**, and **dynamic DOM manipulation**.

Weather data is retrieved through multiple asynchronous API requests using the native `fetch()` API with `async/await`. The application first converts a city name into geographical coordinates using the OpenWeather Geocoding API before requesting both the current weather and 3-hour forecast endpoints. On initial load, the user's approximate city is determined via the `ipwho.is` API, with graceful fallback behavior if geolocation fails.

The application follows a modular rendering architecture where dedicated rendering functions update different UI sections, separating data retrieval from presentation logic. Utility functions handle timezone conversion, 12-hour time formatting, and weather data transformation before synchronizing the interface with the latest API responses.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* OpenWeather Geocoding API
* OpenWeather Current Weather API
* OpenWeather 5-Day / 3-Hour Forecast API
* IPWho.is Geolocation API

## Contacts

Feel free to connect with me through the links below:

* **LinkedIn:** https://www.linkedin.com/in/anurag-ghosh-619072349/
* **GitHub:** https://github.com/Anurag-2708
* **Discord:** https://discord.com/users/750996926610145311

**Finished on 25th June, 2026**

## Acknowledgements

Background image by <a href="https://unsplash.com/@jankronies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jan Kronies</a> on <a href="https://unsplash.com/photos/grayscale-photo-of-snow-covered-mountain-fNCT47HnlNE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>.