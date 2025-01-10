package com.weatherapp.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class WeatherService {

    private final WebClient.Builder webClientBuilder;
    private final String apiKey;
    private static final String WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather";

    public WeatherService(WebClient.Builder webClientBuilder, @Value("${weather.api.key}") String apiKey) {
        this.webClientBuilder = webClientBuilder;
        this.apiKey = apiKey;
    }

    public Object getWeatherForCity(String city) {
        return webClientBuilder.build()
                .get()
                .uri(WEATHER_API_URL + "?q=" + city + "&units=metric&appid=" + apiKey)
                .retrieve()
                .bodyToMono(Object.class)
                .block();
    }
}
