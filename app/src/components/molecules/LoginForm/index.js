import React, { Component } from 'react';
import Input from '_atoms/Input'
import { View } from 'react-native';
import propTypes from 'prop-types';
import Button from '_atoms/Button';
import { connect } from 'react-redux';
import FormHOC from '../HOC/FormHOC'

const state = {
    username:'',
    password:''
}
const prop = {
    login:propTypes.func.isRequired,
    

}
class LoginForm extends Component {
    constructor (props) {
        super(props)
        // console.log(props)
        this.state = this.props.state
        // this.state = {
        //     username:'',
        //     password:'',
        //     error: {
        //         username:'',
        //         password:''
        //     }
        // }
        // unameChange=(text) =>
        // {
        //     this.setState({username:text})
        //     // this.setState({error:{...this.state.error,username:validate({username:'username'},this.state.username)}});
        // }
        // pswChange=(text) =>
        // {
        //     this.setState({password:text})
        //     // this.setState({error:{...this.state.error,password:validate('password',this.state.password)}});
        // }
        // onBlur = (type,text) => { 
        //     this.setState({error:{...this.state.error,[type]:validate('password',this.state.password)}});
        // }
    }
    render() {
        // var inputs = new Array()
        // inputs[0] = <Input onChange={unameChange} type='username' error={this.state.error.username} />
        // inputs[1] = <Input onChange={pswChange} type='password' error={this.state.error.password} />
        // var submit = <Button content='Login' onClick={()=>{this.props.login(this.state.username,this.state.password)  }}/>
        return(
            <View>
                <Input onChange={this.props.onChange} type='username' label='Username' />
                <Input onChange={this.props.onChange} type='password' label='Password'/>
                {/* <Button content='Login' onClick={()=>{this.props.login(this.state.username,this.state.password)  }}/> */}
                <Button content='Login' onClick={()=>console.log(this.props.username + " " +this.props.password) }/>
            </View>
        );
    }
}

// LoginForm.propTypes = {
//     login:propTypes.func.isRequired
// }
LoginForm.propTypes = prop

// REDUX
const mapDispatchToProps = dispatch => {
    return {
        login:(uname,psw) => {
            dispatch({type:'authen/login',payload:(uname,psw)})
        }
    }
}

LoginForm = connect(null,mapDispatchToProps)(LoginForm)

LoginForm = FormHOC(state)(LoginForm)

 export default LoginForm

//   LoginFormRedux