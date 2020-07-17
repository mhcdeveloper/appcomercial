import React from 'react';
import { View } from 'react-native';

import { Title, ButtonFull } from '../../styles';
import Colors from '../../styles/Colors';

export default BtnFull = ({ backgroundColor, onSubmit, label, padding, font, disabled }) => (
    <View style={{ position: 'absolute', bottom: 0, right: 0, left: 0 }}>
        <ButtonFull 
            disabled={disabled}
            backgroundColor={disabled ? Colors.light : backgroundColor}
            activeOpacity={0.7}
            padding={padding}
            onPress={() => onSubmit()}>
            <Title font={font} weight="bold" color={Colors.white}>{label}</Title>
        </ButtonFull>
    </View>
)