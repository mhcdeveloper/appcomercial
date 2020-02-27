import React from 'react';
import { Image } from 'react-native';

import { ContainerCenter, Title } from '../../styles';
import styles from '../../styles/styles';
import { LOGO_EVOLOG } from '../../assets/consts';
import Colors from '../../styles/Colors';

export default Logo = () => (
    <ContainerCenter>
        <Image source={LOGO_EVOLOG} style={styles.logo} />
        <Title top="10px" color={Colors.white} font="28px" weight={600}>App Comercial</Title>
    </ContainerCenter>
)