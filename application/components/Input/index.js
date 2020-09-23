import React, { useEffect, useRef } from 'react';
import { TextInput, Text } from 'react-native';
import { useField } from '@unform/core';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ContainerRow } from '../../styles';
import Colors from '../../styles/Colors';
import { Platform } from 'react-native';

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
                borderWidth={1}
                borderRadius={40}
                borderColor={color}
                paddingTop={Platform.OS == 'ios' ? "4%" : "0.2%"}
                paddingBottom={Platform.OS == 'ios' ? "3%" : "1%"}
                marginBottom="1.5%"
                justifyContent="flex-start">
                {icon && <Icon name={icon} size={28} color={color} style={{ paddingLeft: 20, paddingRight: 10 }} />}
                <TextInput
                    ref={inputRef} 
                    defaultValue={defaultValue} 
                    {...rest} 
                    style={{ width: '100%', fontSize: 18, color, paddingLeft: '8%' }} />
            </ContainerRow>
        </>
    )
}

export default Input;