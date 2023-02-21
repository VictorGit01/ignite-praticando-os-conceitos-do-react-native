import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray_600,
        flex: 1,
        alignItems: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        zIndex: 100,
        marginTop: -27
    },
    input: {
        backgroundColor: colors.gray_500,
        color: colors.white,
        flex: 1,
        height: 54,
        borderRadius: 6,
        padding: 16,
        marginRight: 4,
        fontFamily: fonts.task,
        fontSize: 16,
    },
    button: {
        backgroundColor: colors.blue_dark,
        width: 54,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    icon: {
        fontSize: 16,
        color: colors.white,
    },
    tasksContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 24,
        marginTop: 32,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    createdDoneContainer: {
        flexDirection: 'row',
    },
    createdName: {
        fontFamily: fonts.info,
        fontSize: 14,
        color: colors.blue,
    },
    doneName: {
        fontFamily: fonts.info,
        fontSize: 14,
        color: colors.purple,
    },
    counter: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray_400,
        borderRadius: 999,
        marginLeft: 8,
    },
    counterText: {
        fontFamily: fonts.info,
        fontSize: 12,
        color: colors.gray_200,
        marginVertical: 2,
        marginHorizontal: 10,
    }
});