import React, { Component } from 'react';

const FormHOC = state => WrappedForm => {
    return class HOC extends Component {
        constructor(props) {
            super(props)
            this.state = state
        }
        handleInputChange = (type,value) => {
            this.setState({[type]:value})
            // console.log(type+" "+value)
        }
        handleFormSubmit = () => {

        }
        render() {
            return(
                <WrappedForm {...this.props} {...this.state} onChange={this.handleInputChange}/>
            )
        }
    }
}

export default FormHOC