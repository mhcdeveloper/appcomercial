import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Title, Button } from '../../styles';
import Colors from '../../styles/Colors';
import styles from '../../styles/styles';

export default BtnIcon = ({ backgroundColor, onSubmit, label, padding, font, disabled, icon, color }) => (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button 
            disabled={disabled}
            backgroundColor={backgroundColor}
            activeOpacity={0.7}
            border="12px"
            padding={padding}
            onPress={() => onSubmit()}>
            <View style={styles.containerRow}>
                <Icon name={icon} size={26} color={color} style={{ marginRight: "4%" }} />
                <Title font={font} weight="bold" color={color}>{label}</Title>            
            </View>
        </Button>
    </View>
) 