import React from "react"
import { bindActionCreators } from "redux"
import {connect} from "react-redux"
import {validateSSN} from "../actions/actions"
import { formValidator } from "../formValidator"

class SwedishSSN extends React.Component{

    constructor(props){
        super(props)

        this.checkValidity = this.checkValidity.bind(this)

    }

    checkValidity(event){
        this.props.validateSSN(event.target.value)
    }

    render(){
        const SSNForm = document.getElementById("ssn")
        formValidator(SSNForm, this.props.isSSNValid)
        return(
            <div>
                <input id="ssn" onBlur={this.checkValidity} type="text" placeholder="YYYYMMDD-XXXX" />
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