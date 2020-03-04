import React from 'react';

import { Title, Input, Container } from '../../styles';
import Colors from '../../styles/Colors';

const InputLabel = ({
  upper,
  value,
  label,
  placeholder,
  name,
  type,
  onChangeText,
  valid,
  security,
  colorLabel,
  editable
}) => (
    <Container backgroundColor={Colors.transparent}>
      <Title align="left" top="10px" bottom="3px" color={colorLabel ? colorLabel : Colors.regular}>{label}</Title>
      <Input
        value={value}
        name={name}
        editable={editable ? false : true}
        onChangeText={(text) => onChangeText(name, text)}
        keyboardType={type ? type : "default"}
        borderColor={valid ? '#CDCDCD' : 'red'}
        secureTextEntry={security}
        autoCapitalize={upper}
        placeholder={placeholder}
      />
    </Container>
  )

export default InputLabel;