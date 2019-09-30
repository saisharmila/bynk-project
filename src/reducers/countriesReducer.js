const countriesReducer = (state=null, action) => {
    switch(action.type){
        case "FETCH_COUNTRIES" : return action.payload.data

        default : return state
    }
}

export default countriesReducer