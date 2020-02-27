import React from 'react';
import { Image } from 'react-native';

import { ContainerCenter, Title } from '../../styles';
import { LOGO_EVOLOG } from '../../assets/consts';
import Colors from '../../styles/Colors';

export default Logo = () => (
    <ContainerCenter>
        <Image source={LOGO_EVOLOG} />
        <Title top="10px" color={Colors.white} font="28px" weight={600}>App Comercial</Title>
    </ContainerCenter>
)