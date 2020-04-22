import React from 'react';
import { Image } from 'react-native';

import { ContainerCenter } from '../../styles';
import { CONSTRUCAO } from '../../assets/consts';

const Manutencao = () => (
    <ContainerCenter>
        <Image source={CONSTRUCAO} style={{ width: '100%', height: 300 }} />
    </ContainerCenter>
)

export default Manutencao;