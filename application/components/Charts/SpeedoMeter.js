import React from 'react';
import RNSpeedometer from 'react-native-speedometer'
import { width } from '../../utils';
import { Title, Container } from '../../styles';

export default SpeedoMeter = ({ }) => {
    const defaults = {
        minValue: 0,
        maxValue: 100,
        easeDuration: 500,
        labels: [
            {
                name: 'Zona de Qualidade',
                labelColor: '#F52244',
                activeBarColor: '#F52244',
            },
            {
                name: 'Zona de Qualidade',
                labelColor: '#E64C65',
                activeBarColor: '#E64C65',
            },
            {
                name: 'Zona de Qualidade',
                labelColor: '#FCB150',
                activeBarColor: '#FCB150',
            },
            {
                name: 'Zona de Qualidade',
                labelColor: '#4CA9D1',
                activeBarColor: '#4CA9D1',
            },
            {
                name: 'Zona de Qualidade',
                labelColor: '#05A802',
                activeBarColor: '#05A802',
            },
        ],
    }
    return (
        <Container marginTop="30px">
            <RNSpeedometer
                minValue={0}
                maxValue={100}
                labels={defaults.labels} 
                value={60}
                size={width - 50} />
        </Container>
    )
}