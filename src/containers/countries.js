import React from "react"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import {fetchCountries} from "../actions/actions"

class Countries extends React.Component{

    componentDidMount(){
        this.props.fetchCountries()
    }

    countriesMapper(countries){
        return countries.map(country => {
            return <option key={country.name} value={country.name}>{country.name}</option>
        })
    }

    render(){
        if(this.props.countries){
            return(
                <div>
                    <select>
                        {this.countriesMapper(this.props.countries)}
                    </select>
                </div>
            )
        }else return <div>loading...</div>
        
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