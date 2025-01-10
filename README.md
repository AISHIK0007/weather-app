# Weather App

A modern weather application built with Spring Boot and JavaScript that provides real-time weather information using the Weatherstack API.

## Features

- Real-time weather information
- City-based weather search
- Responsive design
- Secure API key handling

## Prerequisites

- Java 11 or higher
- Maven
- Weatherstack API key

## Setup

1. Clone the repository:
```bash
git clone https://github.com/aishik0007/weather-app.git
```

2. Set up environment variable:
Create a `.env` file in the root directory and add your Weatherstack API key:
```
WEATHER_API_KEY=your_api_key_here
```

3. Build the project:
```bash
mvn clean install
```

4. Run the application:
```bash
mvn spring-boot:run
```

The application will be available at `http://localhost:8080`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
