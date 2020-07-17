import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageResizer from 'react-native-image-resizer';
import RNFS from 'react-native-fs';

import BarcodeMask from './BarcodeMask';
import Colors from '../../styles/Colors';

class Camera extends Component {
    state = {
        depth: 0,
        type: 'back',
        loading: false
    }

    takePicture = async () => {
        const { setCanhoto } = this.props;
        this.setState({ loading: true });
        if (this.camera) {
            const data = await this.camera.takePictureAsync({ quality: 0.5, forceUpOrientation: true, fixOrientation: true, orientation: 'portrait', base64: true });
            if (data) {
                ImageResizer.createResizedImage(data.uri, 900, 1000, 'JPEG', 100).then(async (response) => {
                    let base64 = await RNFS.readFile(response.path, "base64");
                    let canhoto = {
                        base64,
                        img: response.uri
                    }
                    setCanhoto(canhoto);
                    this.setState({ loading: false });
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
    }

    renderCamera() {
        const { loading, type } = this.state;
        const { animatedLine, capture, onBarRead, width, height, closeCamera } = this.props;
        return (
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={{
                    flex: 1,
                }}
                barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                type={type}
                defaultTouchToFocus
                autoFocus={RNCamera.Constants.AutoFocus.on}
                permissionDialogTitle={'Permissão para usar a camera'}
                permissionDialogMessage={'Nos precisamos da sua permissão para usar a camera'}
                onBarCodeRead={onBarRead}
                zoom={0.200}
                ratio="16:9"
                fixOrientation={true}
            >
                {/* <BarcodeMask
                    closeCamera={closeCamera}
                    width={width}
                    height={height}
                    edgeColor="#F57C00"
                    showAnimatedLine={animatedLine} /> */}
                {capture ?
                    loading
                        ?
                        <ActivityIndicator size="large" color="white" />
                        :
                        <View style={styles.containerBtn}>
                            <TouchableOpacity
                                style={[styles.flipButton, { marginBottom: 15 }]}
                                onPress={() => closeCamera()}
                            >
                                <Icon name="times" size={35} color={Colors.red} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.flipButton}
                                onPress={() => this.takePicture()}
                            >
                                <Icon name="camera" size={35} color={Colors.primary} />
                            </TouchableOpacity>
                        </View>
                    : null
                }
            </RNCamera>
        );
    }

    render() {
        return <View style={styles.container}>{this.renderCamera()}</View>;
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000',
        zIndex: 10000,
    },
    containerBtn: {
        position: 'absolute',
        right: 15,
        bottom: 10,
    },
    flipButton: {
        backgroundColor: Colors.white,
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 3,
    }
});

export default Camera;