import React from "react"
import { bindActionCreators } from "redux"
import {connect} from "react-redux"
import {validateEmail} from "../actions/actions"
import { formValidator } from "../formValidator"

class Email extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            email : localStorage.getItem("email") ? localStorage.getItem("email") : ""
        }
         this.handleChange = this.handleChange.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
    }

    componentDidMount(){
        
    }

    validateEmail(event){
        this.props.validateEmail(event.target.value)
    }

    handleChange(e){
        this.setState({email : null})
        window.localStorage.setItem("email", e.target.value)
    }

    render(){
        const email = document.getElementById("helper-text-email")
        formValidator(email, this.props.isEmailValid)
        return(
        <div>
            <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input value={this.state.email} onChange={this.handleChange} id="email" type="email" onBlur={this.validateEmail} />
            <label htmlFor="email">Email</label>
            <span style={{visibility : "hidden"}} id="helper-text-email" className="helper-text"  >Invalid email!</span>
        </div>
              
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