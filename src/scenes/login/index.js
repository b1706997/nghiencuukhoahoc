import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
/// import {test} from '_services';
import LoginForm from '_molecules/LoginForm'
import {useSelector,useDispatch} from 'react-redux';
const login2=(uname,psw)=>{
  const dispatch = useDispatch();
  dispatch(login(uname,psw))
}
const LoginScreen = ({navigation}) => (
  
  // <SafeAreaView>  
  //   <LoginForm login={login}/>
  // </SafeAreaView>

      
  <SafeAreaView>
    <Text>Screen: Login</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Signup')}>
      <Text>Go to signup</Text>
    </TouchableHighlight>


    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text>Go to home</Text>
    </TouchableHighlight>

    <LoginForm/>

  </SafeAreaView>
);

export default LoginScreen;