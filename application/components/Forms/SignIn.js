import React, { useRef, useState, useEffect } from 'react';
import { Form } from '@unform/mobile';
import FingerprintScanner from 'react-native-fingerprint-scanner';

import Btn from '../Buttons';
import Input from '../Input';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { login, loginWithDigital } from '../../services/loginService';
import { ActivityIndicator, Alert } from 'react-native';
import { Content, Title } from '../../styles';
import { storeUserInfo, getUserInfo } from '../../utils';

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    loginDigital();
  }, []);

  async function loginDigital() {
    let user = await getUserInfo();
    if (user) {
      FingerprintScanner
        .authenticate({ description: 'Autenticar com biometria, Posicione o dedo no leitor' })
        .then(async (res) => {
          setLoading(true)
          await login(user).then(_ => {
            setLoading(false);
            navigate('Home');
          }).catch(err => setLoading(false))
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }

  async function handleSubmit(data) {
    navigate('Home')
    // setLoading(true);
    // await login(data).then(res => {
    //   setLoading(false);
    //   storeUserInfo(JSON.stringify(data)).then(_ => navigate('Home'));
    // }).catch(err => {
    //   console.log(err)
    //   Alert.alert("Falha no login.", "E-mail ou senha inválidos.", [
    //     {
    //       text: "ok",
    //       onPress: () => null,
    //       style: "cancel"
    //     }]);
    //   setLoading(false)
    // })
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="dsemalog"
        keyboardType="email-address"
        placeholder="Usuário"
        autoCapitalize="none"
        color={Colors.white}
        placeholderTextColor={Colors.white}
      />
      <Input
        name="dssenha"
        type="password"
        placeholder="Senha"
        secureTextEntry={true}
        autoCapitalize="none"
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
        <>
          <Btn
            padding="8px"
            font="24px"
            label="Entrar"
            onSubmit={() => formRef.current.submitForm()}
            backgroundColor={Colors.primary}
          />
          <Title
            align="right"
            onPress={() => navigate('Forgot')}
            top="2px"
            fontSize="14px"
            bottom="10px"
            color={Colors.white}>
            Esqueceu sua senha ?
          </Title>
        </>
      }
    </Form>
  );
}