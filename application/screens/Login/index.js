import React from 'react';
import { StatusBar, ImageBackground } from 'react-native';

import { BACKGROUND_SPLASH } from '../../assets/consts';
import styles from '../../styles/styles';
import Logo from '../../components/Logo';
import Colors from '../../styles/Colors';
import { Title, Container, ContainerScroll, SafeContainer } from '../../styles';
import SignIn from '../../components/Forms/SignIn';

const Login = () => {
    return (
        <ImageBackground
            source={BACKGROUND_SPLASH}
            style={styles.imageBackground}
            imageStyle={{
                resizeMode: 'stretch',
            }}>
            <SafeContainer>
                <StatusBar hidden />
                <ContainerScroll
                    contentContainerStyle={{ flex: 1 }}
                    backgroundColor={Colors.transparent}>
                    <Logo />
                    <Container
                        marginLeft="6%"
                        marginRight="6%"
                        backgroundColor={Colors.transparent}>
                        <SignIn />
                    </Container>
                </ContainerScroll>
            </SafeContainer>
        </ImageBackground>
    )
}

export default Login;