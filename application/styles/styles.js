import { StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerBlack: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
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
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 45,
        elevation: 8,
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
        backgroundColor: 'rgba(0, 0, 0, 0.8)' 
    },
    imgHeader: {
        width,
        height: 190,
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