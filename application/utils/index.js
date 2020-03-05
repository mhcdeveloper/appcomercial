import { Dimensions } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export const { width, height } = Dimensions.get('window');

import { USER_KEY } from "./const";

//Responsavel por gravar o usuario logado
export const storeUser = async (user) => {
    try {
        await AsyncStorage.setItem(USER_KEY, user)
    } catch (e) { }
}

//Responsavel por limpar o usuario logado
export const removeUser = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY);
    } catch (e) { }
  }