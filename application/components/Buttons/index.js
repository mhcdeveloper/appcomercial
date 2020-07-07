import React from 'react';
import { View } from 'react-native';

import { Title, Button } from '../../styles';
import Colors from '../../styles/Colors';
import styles from '../../styles/styles';

export default Btn = ({ backgroundColor, onSubmit, label, padding, font, disabled }) => (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button 
            disabled={disabled}
            backgroundColor={backgroundColor}
            activeOpacity={0.7}
            padding={padding}
            onPress={() => onSubmit()}>
            <Title font={font} weight="bold" color={Colors.white}>{label}</Title>
        </Button>
    </View>
) 