import React,{Component} from 'react';
import {Text} from 'react-native';
import styles from './styles.js';
import propTypes from 'prop-types';

class CustomText extends Component {
    render() {
        return(
            <Text style={styles[this.props.type]}>
                {this.props.content}
            </Text>
        );
    }
}

const textType = {
    HEADING:'heading',
    PARAGRAPH:'paragraph',
    LABEL:'label',
    ERROR:'error'
}
CustomText.propTypes = {
    content:propTypes.string.isRequired,
    type:propTypes.oneOf(Object.keys(textType)),
}
CustomText.defaultProps = {
    type:'LABEL'
}

export default CustomText;