import React, { useEffect, useRef } from 'react';
import { TextInput, Text } from 'react-native';
import { useField } from '@unform/core';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ContainerRow } from '../../styles';
import Colors from '../../styles/Colors';

function Input({ color, icon, name, label, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue = '', error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: '_lastNativeText',
            getValue(ref) {
                return ref._lastNativeText || '';
            },
            setValue(ref, value) {
                ref.setNativeProps({ text: value });
                ref._lastNativeText = value;
            },
            clearValue(ref) {
                ref.setNativeProps({ text: '' });
                ref._lastNativeText = '';
            },
        });
    }, [fieldName, registerField]);

    return (
        <>
            {label && <Text>{label}</Text>}
            <ContainerRow 
                backgroundColor={Colors.transparent}
                borderBottomWidth={1}
                paddingTop="8px"
                paddingBottom="8px"
                borderBottomColor={color}
                justifyContent="flex-start">
                {icon && <Icon name={icon} size={28} color={color} style={{ paddingLeft: 20, paddingRight: 10 }} />}
                <TextInput ref={inputRef} defaultValue={defaultValue} {...rest} style={{ width: '80%', fontSize: 18, color }} />
            </ContainerRow>
        </>
    )
}

export default Input;