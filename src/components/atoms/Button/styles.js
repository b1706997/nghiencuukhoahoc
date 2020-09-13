import * as styles from '_styles';
import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
    // ButtonType
    button: {
        backgroundColor:styles.Colors.PRIMARY
        ,fontSize:styles.Typography.FONT_SIZE_16,
        width:300,
        borderWidth:1,
        borderColor:'red'
    },
    reset: {
        
    },
    submit: {

    },
    // Theme
    default: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 10
    },
    positive: {

    },
    danger:{

    },
    // Size
    small: {

    },
    medium: {

    },
    large: {

    }
});

export default style;