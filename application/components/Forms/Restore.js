import React, { useRef, useState } from 'react';
import { ToastAndroid, ActivityIndicator } from 'react-native';
import { Form } from '@unform/mobile';

import Btn from '../Buttons';
import Input from '../Input';
import Colors from '../../styles/Colors';
import { forgotPassword } from '../../services/loginService';
import { Content } from '../../styles';
import { useNavigation } from '@react-navigation/native';

export default function Restore() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const { goBack } = useNavigation();

  function handleSubmit(data) {
    setLoading(true);      
    forgotPassword(data).then(res => {
      ToastAndroid.showWithGravity(
        'Recuperação de senha enviada com sucesso!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
        )
        setLoading(false);      
        goBack();
    }).catch(_ => setLoading(false));
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="DSEMALOG"
        type="email"
        placeholder="E-mail"
        icon="user"
        color={Colors.white}
        placeholderTextColor={Colors.white}
      />
      {loading
        ?
        <Content
          marginTop="20px"
          backgroundColor={Colors.transparent}>
          <ActivityIndicator size="large" color={Colors.white} />
        </Content>
        :
        <Btn
          padding="16px"
          font="28px"
          label="ENVIAR"
          onSubmit={() => formRef.current.submitForm()}
          backgroundColor={Colors.primary}
        />
      }
    </Form>
  );
}