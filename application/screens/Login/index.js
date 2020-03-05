import React, { PureComponent } from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BACKGROUND_SPLASH } from '../../assets/consts';
import styles from '../../styles/styles';
import Logo from '../../components/Logo';
import Colors from '../../styles/Colors';
import { Title, Container, ContainerFooter, ContainerScroll } from '../../styles';
import SignIn from '../../components/Forms/SignIn';
import Digital from '../../components/Modals/Digital';

const Login = ({ }) => {
    const { navigate } = useNavigation();
    
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
                    <SignIn />
                </Container>
                <ContainerFooter>
                    <Title onPress={() => navigate('Forgot')} top="10px" bottom="10px" color={Colors.white}>Esqueceu sua senha ?</Title>
                </ContainerFooter>
                {/* <Digital /> */}
            </ContainerScroll>
        </ImageBackground>
    )
}

export default Login;