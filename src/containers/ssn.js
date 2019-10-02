import React from "react"
import { bindActionCreators } from "redux"
import {connect} from "react-redux"
import {validateSSN} from "../actions/actions"
import { formValidator } from "../formValidator"

class SwedishSSN extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            ssn : window.localStorage.getItem("ssn") ? window.localStorage.getItem("ssn") : ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.checkValidity = this.checkValidity.bind(this)

    }

    checkValidity(event){
        this.props.validateSSN(event.target.value)
    }

    handleChange(e){
        this.setState({
            ssn : e.target.value
        })
        window.localStorage.setItem("ssn", e.target.value)
    }

    render(){
        const SSNForm = document.getElementById("helper-text-ssn")
        formValidator(SSNForm, this.props.isSSNValid)
        return(
        <div>
            <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input onChange={this.handleChange} value={this.state.ssn} id="ssn" onBlur={this.checkValidity} type="text" className="validate" />
            <label for="ssn">Social security number</label>
            <span  style={{visibility : "hidden"}} id="helper-text-ssn" className="helper-text">Invalid Swedish security number!</span>
        </div>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({validateSSN}, dispatch)
}

function mapStateToProps(state){
    return {
        isSSNValid : state.formValidity.isSSNValid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwedishSSN)