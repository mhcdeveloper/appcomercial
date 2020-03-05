import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

import Btn from '../Buttons';
import Input from '../Input';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { login } from '../../services/loginService';

export default function SignIn() {
  const formRef = useRef(null);
  const { navigate } = useNavigation();

  async function handleSubmit(data) {
    await login(data).then(res => {
      navigate('Home');
    })
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="dsemalog"
        type="email"
        placeholder="E-mail"
        icon="user"
        color={Colors.white}
        placeholderTextColor={Colors.white}
      />
      <Input
        name="dssenha"
        type="password"
        placeholder="Senha"
        secureTextEntry={true}
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