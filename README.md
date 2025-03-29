# Weather Dashboard Web App

This project is a **Weather Dashboard Web App** built using **React.js**. It integrates the **OpenWeatherMap API** to display live weather information.

## Tech Stack

- **Frontend:** React.js, CSS (No Tailwind CSS used)
- **API:** OpenWeatherMap API
- **Package Manager:** npm

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)

### Installation

 **Clone the repository:**

git clone https://github.com/Rajeevkr18/Whetherapp.git
cd weatherapp

### Install dependencies:

npm install

### Create a .env file in the root directory and add your OpenWeatherMap API key:

REACT_APP_WEATHER_API_KEY=your_api_key_here

### Start the development server:

npm start

**Open http://localhost:3000 in your browser.**

### API Integration

OpenWeatherMap API

**Base URL**

https://api.openweathermap.org/data/2.5/weather
 

**Example Request**

https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key&units=metric

Response Format

{
  "weather": [{ "description": "clear sky" }],
  "main": { "temp": 25.3, "humidity": 60 },
  "wind": { "speed": 3.2 }
}

### Rate Limits

Free-tier accounts have a limit of 60 requests per minute.

### Build and Deployment

To build the app for production:

npm run build

The production-ready files will be in the build/ directory.

For deployment options, check out the React deployment guide.

### Live Demo

Access the deployed application here:  https://whether-application.netlify.app/
