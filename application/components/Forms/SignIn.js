import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

import Btn from '../Buttons';
import Input from '../Input';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const formRef = useRef(null);
  const { navigate } = useNavigation();

  function handleSubmit(data) {
    navigate('Home');  
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        placeholder="E-mail"
        icon="user"
        color={Colors.white}
        placeholderTextColor={Colors.white}
      />
      <Input
        name="password"
        type="password"
        placeholder="Senha"
        icon="lock"
        color={Colors.white}
        placeholderTextColor={Colors.white}
      />
      <Btn
        padding="16px"
        font="28px"
        label="ENTRAR"
        onSubmit={() => formRef.current.submitForm()}
        backgroundColor={Colors.primary}
      />
    </Form>
  );
}