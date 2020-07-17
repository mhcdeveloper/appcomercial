import React from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { removeImage } from '../../store/Actions/QuestionActions';
import Colors from '../../styles/Colors';

const width = Dimensions.get('window').width;
const ImageItem = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.icon}
                activeOpacity={0.7}
                onPress={() => dispatch(removeImage(item))}>
                <Icon name="times" size={20} color={Colors.white} />
            </TouchableOpacity>
            <Icon name="images" size={55} color={Colors.light} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 5,
        minHeight: 90,
        marginTop: 10,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.lighter,
        borderRadius: 8
    },
    icon: {
        width: 30,
        height: 30,
        position: "absolute",
        right: -5,
        top: -10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: Colors.primary
    }
});

export default ImageItem;