import React from "react"
import { bindActionCreators } from "redux"
import {connect} from "react-redux"
import {validatePhoneNumber} from "../actions/actions"
import { formValidator } from "../formValidator"

class PhoneNumber extends React.Component{

    constructor(props){
        super(props)

        this.validatePhone = this.validatePhone.bind(this)
    }

    validatePhone(event){
        this.props.validatePhoneNumber(event.target.value)

        
    }

    render(){
        const phoneForm = document.getElementById("phone")
        formValidator(phoneForm, this.props.isPhoneNumberValid)
        return(
            <div>
                <input id="phone" placeholder="+46XXXXXXXXX" type="tel" onBlur={this.validatePhone} /> 
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({validatePhoneNumber}, dispatch)
}

function mapStateToProps(state){
    return {
        isPhoneNumberValid : state.formValidity.isPhoneNumberValid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneNumber)