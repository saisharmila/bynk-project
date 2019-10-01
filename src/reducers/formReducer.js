const formState = {
    isSSNValid : null,
    isEmailValid : null,
    isPhoneNumberValid : null
}
const SSNReducer = (state, action) => {
    switch(action.type){
        case "VALIDATE_SSN" : 
            const validity =  /^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/.test(action.payload)

            return validity
        
        default : return state
    }
   
}

const emailReducer = (state, action) => {
    switch(action.type){
        case "VALIDATE_EMAIL" : 
            // eslint-disable-next-line
            const validity = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(action.payload.toLowerCase())

            return validity
        default : return state
    }
}

const phoneReducer = (state, action) => {
    switch(action.type){
        case "VALIDATE_PHONE" : 
        
        const validity = /^((((0{2}?)|(\+){1})46)|0)7[\d]{8}/.test(action.payload)

            return validity

        default : return state
    }
}

const formReducer = (state = formState, action) => {
    return {
        isSSNValid : SSNReducer(state.isSSNValid, action),
        isEmailValid : emailReducer(state.isEmailValid, action),
        isPhoneNumberValid : phoneReducer(state.isPhoneNumberValid, action)
    }
}

export default formReducer