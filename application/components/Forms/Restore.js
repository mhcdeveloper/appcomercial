import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

import Btn from '../Buttons';
import Input from '../Input';
import Colors from '../../styles/Colors';

export default function Restore() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
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
      <Btn
        padding="18px"
        font="28px"
        label="ENVIAR"
        onSubmit={() => formRef.current.submitForm()}
        backgroundColor={Colors.primary}
      />
    </Form>
  );
}