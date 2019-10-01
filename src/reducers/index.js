import {combineReducers} from "redux"

import countriesReducer from "./countriesReducer"
import formReducer from "./formReducer"

export default combineReducers({
    countries : countriesReducer,
    formValidity : formReducer
})