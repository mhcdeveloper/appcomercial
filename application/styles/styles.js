import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from './Colors';

const { width, height } = Dimensions.get('window');
const isIos = Platform.OS == 'ios';

const styles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    containerBlack: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 5
    },
    containerIcon: {
        width: '18%',
        height: isIos ? "55%" : '25%',
        position: 'absolute',
        justifyContent: "center",
        alignItems: "center",
        top: isIos ? '-35%' : '-15%',
        right: '-0.2%',
        backgroundColor: Colors.primary,
        borderRadius: 50
    },
    imageBackground: {
        flex: 1,
        width,
        height,
        backgroundColor: Colors.white,
    },
    containerModal: {
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 20
    },
    contentModal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    containerHeader: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.primary,
        paddingTop: isIos ? 40 : '0.4%',
        paddingBottom: 5,
    },
    containerRowPagination: {
        backgroundColor: Colors.regular,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomLeftRadius: 45,
        borderTopLeftRadius: 45,
        marginTop: 50,
    },
    containerBlack: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    imgHeader: {
        width: width / 2,
        height: isIos ? 55 : 50,
        resizeMode: "stretch"
    },
    btnGradient: {
        borderRadius: 25,
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
    },
    modalAlert: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
    }
});

export default styles;