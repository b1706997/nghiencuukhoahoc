import React, { Component } from 'react';

const FormHOC = state => submit => WrappedForm => {
    return class HOC extends Component {
        constructor(props) {
            super(props)
            console.log(props)
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