import React, { PureComponent } from 'react';
import { StatusBar, ImageBackground } from 'react-native';

import { BACKGROUND_SPLASH } from '../../assets/consts';
import styles from '../../styles/styles';
import Logo from '../../components/Logo';
import Btn from '../../components/Buttons';
import Colors from '../../styles/Colors';
import { Title, Container, ContainerFooter, ContainerScroll } from '../../styles';

class Login extends PureComponent {
    render() {
        const { navigation } = this.props;
        return (
            <ImageBackground
                source={BACKGROUND_SPLASH}
                style={styles.imageBackground}
                imageStyle={{
                    resizeMode: 'stretch',
                }}>
                <ContainerScroll    
                    contentContainerStyle={{ flex: 1 }}
                    backgroundColor={Colors.transparent}>
                    <StatusBar hidden />
                    <Logo />
                    <Container
                        marginLeft="10%"
                        marginRight="10%"
                        backgroundColor={Colors.transparent}>
                    </Container>
                    <ContainerFooter>
                        <Btn
                            padding="20px"
                            font="28px"
                            label="ENTRAR"
                            backgroundColor={Colors.primary}
                        />
                        <Title onPress={() => navigation.navigate('Forgot')} top="10px" bottom="10px" color={Colors.white}>Esqueceu sua senha ?</Title>
                    </ContainerFooter>
                </ContainerScroll>
            </ImageBackground>
        )
    }
}

export default Login;