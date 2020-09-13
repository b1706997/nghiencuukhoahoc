import * as styles from '_styles';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    label: {
        fontSize:styles.Typography.FONT_SIZE_16
    },
    error: {
        fontSize:styles.Typography.FONT_SIZE_14,
        color:styles.Colors.WARNING
    }
});

export default style;