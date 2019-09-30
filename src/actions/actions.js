import axios from "axios"

export const fetchCountries = () =>{
    const request = axios.get("https://restcountries.eu/rest/v2/all")

    return {
        type : "FETCH_COUNTRIES",
        payload : request
    }
}