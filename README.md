# 🌦️ WeatherNow 

A modern weather app built with **React**, styled using **Material UI (MUI)**, and powered by the **OpenWeather API**. The app allows users to search for any place and get real-time weather information.


## 📽 Demo Video
🌤️ 🌧️
[![Watch the demo](.\src\assets\cover_pic.png)](https://www.linkedin.com/posts/priyanshi-sahu-3a7544281_webdevelopment-reactjs-materialui-activity-7376970252158423040-6C4u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESZ7S8BImojSrqrY7ikQHo1ij8eKy7L6Tw)


## 🚀 Features

- **🔍 Real-Time Place Search:** Enter a city name to instantly fetch and display weather data.
- **🌄 Dynamic Weather Imagery:** Background and icons update based on the current weather condition (e.g., sunny, rainy, cloudy).
- **⚠️ Error Handling:** Displays a user-friendly message when a place is not found.


## 🛠️ Tech Stack

- **Frontend:** React
- **UI Components:** MUI (Material UI)
- **Weather Data:** OpenWeatherMap API

## 📦 Installation

1. **Clone the repository:**

  ```
    git clone https://github.com/your-username/WeatherNow.git

    cd mini-project-react   
  ```

2. **Install dependencies:**
```
    npm install
```

3. **Set up API key:**

    Create a .env file in the root directory 
```
    VITE_API_KEY=enter_your_api_key
    VITE_API_URL=enter_your_api_url
```



4. **Start the development server:**
  ```
    npm run dev
  ```




📁 Folder Structure

```
WeatherNow/        # Installed dependencies
├── public/                # Static files 
├── src/  
|       ├── assets/
|       ├── InfoBox.jsx
|       ├── InfoBox.css
|       ├── SearchBox.jsx
|       ├── SearchBox.css
|       ├──WeatherApp.jsx
|       ├── App.jsx
|       ├── App.css
|       ├── main.jsx
|       └── index.css                                
├── .gitignore             
├── eslint.config.js       
├── index.html             
├── package-lock.json     
├── package.json           
├── README.md             
├── vite.config.js        


```