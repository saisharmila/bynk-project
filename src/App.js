import React from 'react';
import {connect} from "react-redux"
import './App.css';
import Countries from './containers/countries';
import SwedishSSN from './containers/ssn';
import Email from './containers/email';
import PhoneNumber from './containers/phoneNumber';


class App extends React.Component {

  constructor(props){
    super(props)

    this.submitData = this.submitData.bind(this)
  }

  submitData(e){
    e.preventDefault()
    
    if(this.props.formHasError){
      alert("Form has errors, please check and resubmit")
      
    }else {
      alert("Form is looking good :)")
    }
    
  }

  render(){
    
    return (
      <div className="App">
        <form onSubmit={this.submitData}>
        <Countries />
        <SwedishSSN />
        <Email />
        <PhoneNumber />
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
}

function mapStateToProps(state){
  const {isSSNValid, isEmailValid, isPhoneNumberValid} = state.formValidity
  return {
    formHasError : !(isSSNValid && isEmailValid && isPhoneNumberValid)
  }
}

export default connect(mapStateToProps)(App);
