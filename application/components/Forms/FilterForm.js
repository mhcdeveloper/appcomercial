import React, { useRef, useState, useEffect, useContext } from 'react';
import { Form } from '@unform/mobile';

import Btn from '../Buttons';
import Input from '../Input';
import Colors from '../../styles/Colors';
import { ActivityIndicator, Alert } from 'react-native';
import { Content, Title } from '../../styles';
import { getCargaInfo } from '../../services';

const FilterForm = ({ handleCarga }) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  async function handleSubmit(data) {
    setLoading(true);
    await getCargaInfo(data).then(infos => {
      setLoading(false);
      handleCarga(infos.data.length > 0 ? infos.data[0] : false);
    }).catch(err => {
      Alert.alert("Falha ao buscar informações", "Não foi possivel encontrar nenhuma informação da carga informada", [
        {
          text: "ok",
          onPress: () => null,
          style: "cancel"
        }]);
      setLoading(false)
    })
  }

  return (
    <Content
      marginLeft="5%"
      marginRight="5%">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="IDG046"
          keyboardType="numeric"
          placeholder="Código do Shipment"
          autoCapitalize="none"
          color={Colors.primaryText}
          placeholderTextColor={Colors.primaryText}
        />
        {loading
          ?
          <Content
            marginTop="20px"
            backgroundColor={Colors.transparent}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </Content>
          :
          <Btn
            font="26px"
            label="Buscar"
            onSubmit={() => formRef.current.submitForm()}
            backgroundColor={Colors.primary}
          />
        }
      </Form>
    </Content>
  );
}

export default FilterForm;