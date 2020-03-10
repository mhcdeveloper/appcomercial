import { Dimensions } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export const { width, height } = Dimensions.get('window');

import { USER_KEY, USER_KEY_DIGITAL } from "./const";


//Responsavel por pegar as informações do usuario para logar com a digital
export const getUserInfo = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_KEY_DIGITAL)
    if (value !== null) {
      return JSON.parse(value)
    } else {
      return false;
    }
  } catch (e) { }
}

//Responsavel por buscar o usuario logado
export const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_KEY)
    if (value !== null) {
      return JSON.parse(value)
    } else {
      return false;
    }
  } catch (e) { }
}

//Responsavel por gravar o usuario logado
export const storeUser = async (user) => {
    try {
        await AsyncStorage.setItem(USER_KEY, user)
    } catch (e) { }
}

//Responsavel por gravar o usuario para utilizar a digital
export const storeUserInfo = async (user) => {
    try {
        await AsyncStorage.setItem(USER_KEY_DIGITAL, user)
    } catch (e) { }
}

//Responsavel por limpar o usuario logado
export const removeUser = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY);
    } catch (e) { }
  }