import React from "react"
import { bindActionCreators } from "redux"
import {connect} from "react-redux"
import {validateEmail} from "../actions/actions"
import { formValidator } from "../formValidator"

class Email extends React.Component{

    constructor(props){
        super(props)

        this.validateEmail = this.validateEmail.bind(this)
    }

    validateEmail(event){
        this.props.validateEmail(event.target.value)
    }

    render(){
        const email = document.getElementById("email")
        formValidator(email, this.props.isEmailValid)
        return(
            <div>
                <input id="email" type="email" placeholder="foo@bar.com" onBlur={this.validateEmail} /> 
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({validateEmail}, dispatch)
}

function mapStateToProps(state){
    return{
        isEmailValid : state.formValidity.isEmailValid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Email)