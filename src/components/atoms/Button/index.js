import React, { Component } from 'react';
import { TouchableOpacity, Text, Pressable,View } from 'react-native';
import styles from './styles.js';
import propTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
        <TouchableOpacity onPress={this.props.onClick} style={styles[this.props.type],this.props.theme,this.props.size}>
            <Text style={styles[this.props.size],styles[this.props.type]}>{this.props.content}</Text>
        </TouchableOpacity>
    );
  }
}
ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}
ButtonTheme = {
  DEFAULT: 'default',
  POSITIVE: 'positive',
  DANGER: 'danger',
}
ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

Button.propTypes = {
    type: propTypes.oneOf(Object.keys(ButtonType)),
    theme: propTypes.oneOf(Object.keys(ButtonTheme)),
    size: propTypes.oneOf(Object.keys(ButtonSize)),
    onClick: propTypes.func.isRequired,
    content: propTypes.string.isRequired
}

Button.defaultProps = {
    type: 'BUTTON',
    theme: 'DEFAULT',
    size: 'MEDIUM',
}
export default Button;