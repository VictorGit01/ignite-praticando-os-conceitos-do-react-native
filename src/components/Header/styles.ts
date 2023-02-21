import { StyleSheet } from 'react-native';

import { colors }  from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 173,
        backgroundColor: colors.gray_700,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 32,
        resizeMode: 'contain'
    }
});