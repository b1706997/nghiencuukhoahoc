import React, { Component, useState } from 'react';
import { TextInput,View } from 'react-native';
import propTypes from 'prop-types';
import CustomText from '_atoms/CustomText';
import validation from '_utils/validator/rules.js';
import validatejs from '_utils/validator';
class Input extends Component {
    constructor(props) {
        super(props)
        // construct label,placeholder from type if undefined
        const presence = validation[this.props.type].presence;
        this.state = {
            error:false,
            errorMsg:'',
            value:'',
            label:this.props.label===undefined?this.props.type:this.props.label,
            placeholder:this.props.placeholder===undefined?this.props.type:this.props.placeholder
        }
    }
    validate = () => {
        const msg = validatejs(this.props.type,this.state.value)
        if(!msg || msg!='') {
            this.setState({ error:true ,errorMsg:msg})
        }
        else {
            this.setState({ error:false,errorMsg:'' })
        }
    }
    handleOnChange = (event) => {
        // update value of the input
        const text = event.nativeEvent.text
        this.setState({value:text})
        if(this.state.error)
            this.validate()
        
        console.log(this.state.value)
        this.props.onChange(this.props.type,text)
    }

    // validateOnChange = () => {
    //     if(this.state.message!='')
    //     {
    //         // THERE CURRENTLY AN ERROR
    //         const msg = validatejs(this.props.type,this.state.content);
    //         if(!msg || msg!='') {
    //             this.setState({ error:{passed:false,message:msg} })
    //         }
    //         else {
    //             this.setState({ error:{passed:true,message:''} })
    //         }  
    //     }
    // }

    render() {
        return(
            <View>
                <CustomText type='LABEL' content={this.state.label}/>
                <TextInput 
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder={this.state.placeholder}
                    onChange={this.handleOnChange}
                    // onChange={this.state.errorMsg!=''?this.validate:null}
                    onBlur={this.validate}
                    returnKeyType={this.props.returnKeyType}
                />
                { this.state.error == true ? <CustomText type='ERROR' content={this.state.errorMsg}/> : null }
            </View>
        );
    }
}

Input.propTypes = {
    type:propTypes.string.isRequired,
    placeholder:propTypes.string,
    label:propTypes.string,
    onChange:propTypes.func.isRequired,
    returnKeyType:propTypes.string // The enter button shape on the phone keyboard
};



export default Input;
