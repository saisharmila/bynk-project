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
        const phoneForm = document.getElementById("helper-text-phone")
        formValidator(phoneForm, this.props.isPhoneNumberValid)
        return(
            <div>
                <div className="input-field col s6">
          <i className="material-icons prefix">phone</i>
          <input id="phone" type="tel" onBlur={this.validatePhone} class="validate" />
          <label htmlFor="phone">Telephone</label>
          <span style={{visibility : " hidden"}} id="helper-text-phone" className="helper-text">Invalid Swedish phone number!</span>
        </div>
               
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