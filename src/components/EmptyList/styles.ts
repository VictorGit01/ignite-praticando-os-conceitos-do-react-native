import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 48,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: colors.gray_400,
    },
    img: {
        height: 64,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    strong: {
        fontFamily: fonts.info,
    },
    text: {
        fontFamily: fonts.task,
        fontSize: 14,
        color: colors.gray_300,
    }
});