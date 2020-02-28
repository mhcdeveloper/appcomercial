import React from 'react';

import { Container, ContainerScroll, Title } from '../../styles';
import Header from '../../components/Header';
import { StatusBar } from 'react-native';
import Colors from '../../styles/Colors';

const Home = ({}) => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header />
        </Container>
    )
}

export default Home;