async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();
    
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
        const data = await response.json();
        
        if (data.current) {
            updateWeatherUI(data);
        } else {
            if (data.error) {
                if (data.error.code === 101) {
                    alert('Invalid API key. Please check your Weatherstack API key.');
                } else if (data.error.code === 615) {
                    alert('City not found. Please check the city name and try again.');
                } else {
                    alert(data.error.info || 'Error fetching weather data');
                }
            }
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch weather data. Please check your internet connection and try again.');
    }
}

function updateWeatherUI(data) {
    document.getElementById('cityName').textContent = data.location.name + ', ' + data.location.country;
    document.getElementById('temperature').textContent = `${data.current.temperature}°C`;
    document.getElementById('weatherDescription').textContent = data.current.weather_descriptions[0];
    document.getElementById('humidity').textContent = `${data.current.humidity}%`;
    document.getElementById('windSpeed').textContent = `${data.current.wind_speed} km/h`;
    
    // Update weather icon
    document.getElementById('weatherIcon').src = data.current.weather_icons[0];
}

// Add event listener for Enter key
document.getElementById('cityInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});
