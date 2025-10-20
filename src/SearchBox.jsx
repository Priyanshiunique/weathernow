import { useState } from "react";
import { useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;



// Leh
// Jaisalmer
// Cherrapunji  or goa
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
   


    let getWeatherInfo =  async () => {
        try {
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        // console.log(jsonResponse);

        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }

    }

   

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }


    }


    // added by me .... for error line to disappear if searched wrong place 
    //This logic shows an error message for 3 seconds, then hides it automatically.
    useEffect(() => {
        if (error) {
        const timer = setTimeout(() => {
            setError(false); // hide the error after 3 seconds
        }, 3000);

        // cleanup
        return () => clearTimeout(timer);
        }
    }, [error]);



    return (
        <div className="SearchBox">
            {/* <h3> Search for the weather </h3> */}
            <form action="" onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={ handleChange }
                />

                <br /><br />
               
                <Button 
                    variant="contained" 
                    type="submit"> Search 
                </Button>

               {error && <p style={{color: "red"}}> No such place exists !</p>}

            </form>

           
            
        </div>
    )
}