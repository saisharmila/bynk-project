import React from "react"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import {fetchCountries} from "../actions/actions"

class Countries extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            selectedCounty : localStorage.getItem("country") ? localStorage.getItem("country") : ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.props.fetchCountries()
    }

    countriesMapper(countries){
        return countries.map(country => {
            return <option data-icon={country.flag} key={country.name} value={country.name}>{country.name}</option>
        })
    }

    handleChange(e){
        this.setState({
            selectedCounty : e.target.value
        })
        window.localStorage.setItem("country", e.target.value)
    }

    render(){
        if(this.props.countries){
            return(
                <div className="input-field col s12 m6">
                    <select value={this.state.selectedCounty} onChange={this.handleChange} id="countries" className="icons">
                        {this.countriesMapper(this.props.countries)}
                    </select>
                </div>
            )
        }else return null
        
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchCountries}, dispatch)
}

function mapStateToProps(state){
    return {
        countries : state.countries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries)