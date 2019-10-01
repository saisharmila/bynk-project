import axios from "axios"

export const fetchCountries = () =>{
    const request = axios.get("https://restcountries.eu/rest/v2/all")

    return {
        type : "FETCH_COUNTRIES",
        payload : request
    }
}

export const validateSSN = ssn => {

    return{
        type : "VALIDATE_SSN",
        payload : ssn
    }
}

export const validateEmail = email => {
    
    return{
        type : "VALIDATE_EMAIL",
        payload : email
    }
}

export const validatePhoneNumber = number => {

    return{
        type : "VALIDATE_PHONE",
        payload : number
    }
}