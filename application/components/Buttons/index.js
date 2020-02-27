import React from 'react';
import { View } from 'react-native';

import { Title, Button } from '../../styles';
import Colors from '../../styles/Colors';
import styles from '../../styles/styles';

export default Btn = ({ backgroundColor, onSubmit, label, padding, font }) => (
    <View style={styles.containerCenter}>
        <Button 
            backgroundColor={backgroundColor}
            activeOpacity={0.7}
            padding={padding}
            onPress={() => onSubmit()}>
            <Title font={font} color={Colors.white}>{label}</Title>
        </Button>
    </View>
)