import React, { useRef, useState, useEffect } from 'react';
import { Form } from '@unform/mobile';
import FingerprintScanner from 'react-native-fingerprint-scanner';

import Btn from '../Buttons';
import Input from '../Input';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { login, loginWithDigital } from '../../services/loginService';
import { ActivityIndicator, Alert } from 'react-native';
import { Content } from '../../styles';
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
          console.log(res)
          setLoading(true)
          await login(user).then(_ => {
            setLoading(false);
            navigate('Home');
          }).catch(err => setLoading(false))
        })
        .catch((error) => {
          Alert.alert("Falha no login.", "E-mail ou senha inválidos.", [
            {
              text: "ok",
              onPress: () => null,
              style: "cancel"
            }]);
          setLoading(false);
        });
    }
  }

  async function handleSubmit(data) {
    data.dsmodulo = 'TRACKING';
    setLoading(true);
    await login(data).then(res => {
      setLoading(false);
      storeUserInfo(JSON.stringify(data)).then(_ => navigate('Home'));
    }).catch(err => {
      console.log(err)
      setLoading(false)
    })
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="dsemalog"
        keyboardType="email-address"
        placeholder="E-mail"
        autoCapitalize="none"
        icon="user"
        color={Colors.white}
        placeholderTextColor={Colors.white}
      />
      <Input
        name="dssenha"
        type="password"
        placeholder="Senha"
        secureTextEntry={true}
        autoCapitalize="none"
        icon="lock"
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
          label="ENTRAR"
          onSubmit={() => formRef.current.submitForm()}
          backgroundColor={Colors.primary}
        />
      }
    </Form>
  );
}