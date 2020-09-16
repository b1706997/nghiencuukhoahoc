import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const LoginScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Signup</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Login')}>
      <Text>Go to login</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default LoginScreen;