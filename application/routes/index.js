import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Forgot from '../screens/Login/Forgot';
import Home from '../screens/Home';
import MenuScreen from '../components/MenuScreen';
import Nps from '../screens/Nps';
import Relatorio from '../components/Relatorio';
import PerformanceEntrega from '../screens/PerformanceEntrega';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Nps" component={Nps} options={{ headerShown: false }} />
            <Stack.Screen name="PerformanceEntrega" component={PerformanceEntrega} options={{ headerShown: false }} />
            <Stack.Screen name="Relatorio" component={Relatorio} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}