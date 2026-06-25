// main-info elements
const location_div = document.querySelector('.location');
const date_time_info_div = document.querySelector('.date-time-info');
const temperature_span = document.querySelector('.temperature');
const weather_icon_img = document.querySelector('.temp-info img');
const description_div = document.querySelector('.description');
const feel_div = document.querySelector('.feel');

// other-info elements
const wind_info_div = document.querySelector('#wind .card-info');
const humidity_info_div = document.querySelector('#humidity .card-info');
const pressure_info_div = document.querySelector('#pressure .card-info');
const sunrise_info_div = document.querySelector('#sunrise .card-info');
const sunset_info_div = document.querySelector('#sunset .card-info');
const visibility_info_div = document.querySelector('#visibility .card-info');

// 3-hourly-forecast elements
const hourly_forecast_item_divs = document.querySelectorAll('.hourly-forecast-item');

// month and day arrays
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// error messages
const server_error_message = 'Failed to fetch Data from Server!';

// Openweathermap API key (free tier)
const OPEN_WEATHER_APP_API = 'a43f5796b2321b46da199ac589a352a0';

async function get_coords(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${OPEN_WEATHER_APP_API}`);
        if (!response.ok) throw new Error(server_error_message);

        const data = await response.json();
        if (data.length === 0) throw new Error('City not Found!');

        const lat = data[0].lat;
        const lon = data[0].lon;

        return { lat, lon };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function get_weather_data(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APP_API}&units=metric`);
        if (!response.ok) throw new Error(server_error_message);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function get_3_hourly_forecast(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APP_API}&units=metric`);
        if (!response.ok) throw new Error(server_error_message);

        const data_3_hourly = await response.json();
        return data_3_hourly;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

function get_time_period(hour) {
    if (hour == 12) return [hour, 'pm'];
    else if (hour > 12) return [hour - 12, 'pm'];
    else return [hour, 'am'];
}

function render_main_info(data, city) {
    location_div.textContent = `${data.name}, ${data.sys.country}`;

    const cityTime = new Date(Date.now() + (data.timezone + new Date().getTimezoneOffset() * 60) * 1000);
    let hours = cityTime.getHours();
    let day_period;
    [hours, day_period] = get_time_period(Number(hours));
    date_time_info_div.textContent = `${days[cityTime.getDay()]}, ${months[cityTime.getMonth()]} ${cityTime.getDate()}, ${cityTime.getFullYear()} • ${String(hours).padStart(2, '0')}:${String(cityTime.getMinutes()).padStart(2, '0')}${day_period}`;

    temperature_span.textContent = `${Math.round(data.main.temp)}°C`;
    weather_icon_img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    description_div.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    feel_div.textContent = `Feels like ${Math.round(data.main.feels_like)}°`;
}

function render_other_info(data) {
    wind_info_div.textContent = `${data.wind.speed}km/h`;
    humidity_info_div.textContent = `${data.main.humidity}%`;
    pressure_info_div.textContent = `${data.main.pressure}hPa`;
    visibility_info_div.textContent = `${data.visibility / 1000}km`;

    const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
    const sunset = new Date((data.sys.sunset + data.timezone) * 1000);

    const [sunrise_hours, sunrise_time_period] = get_time_period(sunrise.getUTCHours());
    const [sunset_hours, sunset_time_period] = get_time_period(sunset.getUTCHours());

    sunrise_info_div.textContent = `${String(sunrise_hours).padStart(2, "0")}:${String(sunrise.getUTCMinutes()).padStart(2, "0")}${sunrise_time_period}`;
    sunset_info_div.textContent = `${String(sunset_hours).padStart(2, "0")}:${String(sunset.getUTCMinutes()).padStart(2, "0")}${sunset_time_period}`;
}


function render_3_hourly_forecast(data_3_hourly) {
    data_3_hourly = data_3_hourly.list.slice(0, 8);

    hourly_forecast_item_divs.forEach((item, index) => {
        const forecast = data_3_hourly[index];

        let hours = forecast.dt_txt.slice(11, 13);
        const mins = forecast.dt_txt.slice(14, 16);
        let day_period;
        if (hours == 12) {
            day_period = 'pm';
        }
        else if (hours > 12) {
            day_period = 'pm';
            hours -= 12;
        }
        else {
            day_period = 'am';
        }

        item.querySelector('.hourly-forecast-time').textContent = `${hours}:${mins}${day_period}`;
        item.querySelector('img').src = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        item.querySelector('.hourly-forecast-temp').textContent = `${Math.round(forecast.main.temp)}°C`;
        item.querySelector('.hourly-forecast-humidity span').textContent = `${forecast.main.humidity}%`;
    });
}


function render_data(data, data_3_hourly, city) {
    render_main_info(data, city);
    render_other_info(data);
    render_3_hourly_forecast(data_3_hourly);
}

async function main(city) {
    try {
        const { lat, lon } = await get_coords(city);
        const data = await get_weather_data(lat, lon);
        const data_3_hourly = await get_3_hourly_forecast(lat, lon);

        render_data(data, data_3_hourly, city);
    } catch (error) {
        alert(error.message);
    }
}

const search_form = document.querySelector('.search-container');
const input = document.querySelector('#search');

search_form.addEventListener("submit", e => {
    e.preventDefault();

    const city = input.value;
    input.value = "";

    main(city);
});

window.addEventListener("load", async () => {
    try {
        const response = await fetch("https://ipwho.is/");
        const data = await response.json();
        if (!data.success) {
            throw new Error(data.message || 'IP lookup failed');
        }

        main(data.city);
    } catch (error) {
        console.error('Failed to get city from IP. Defaulting to "New Delhi', error);
        main('New Delhi');
    }
});