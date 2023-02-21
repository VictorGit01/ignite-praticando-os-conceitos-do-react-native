import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: colors.gray_500,
        borderWidth: 1,
        borderColor: colors.gray_400,
        borderRadius: 8,
        marginBottom: 8,
    },
    name: {
        flex: 1,
        fontFamily: fonts.task,
        fontSize: 14,
        color: colors.gray_100,
        marginHorizontal: 12,
    },
    checkIcon: {
        fontSize: 24,
        color: colors.blue,
    },
    trashIcon: {
        fontSize: 24,
        color: colors.gray_300,
    }
});