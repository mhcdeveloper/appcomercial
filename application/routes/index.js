import React, { useReducer, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Forgot from '../screens/Login/Forgot';
import Home from '../screens/Home';
import CheckList from '../screens/CheckList';
import Modulo from '../screens/Modulo';
import { AuthContext } from '../Context';

const AppStack = createStackNavigator();
const AppStackScreen = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <AppStack.Screen name="CheckList" component={CheckList} options={{ headerShown: false }} />
        <AppStack.Screen name="Modulo" component={Modulo} options={{ headerShown: false }} />
    </AppStack.Navigator>
)

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator>        
        <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <AuthStack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
    </AuthStack.Navigator>
)

const Stack = createStackNavigator();
export default Routes = () => {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        isLoading: false,
                        isSignin: true
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isLoading: false,
                        isSignout: true,
                        isSignin: false
                    }
            }
        },
        {
            isLoading: true,
            isSignout: false,
            isSignin: false,
        }
    )

    const authContext = useMemo(
        () => ({
          signIn: () => dispatch({ type: 'SIGN_IN' }),
          signOut: () => dispatch({ type: 'SIGN_OUT' }),
        }), []
      );
 
      return (
          <AuthContext.Provider value={authContext}>
              <NavigationContainer>
                <Stack.Navigator>
                    {state.isLoading && (
                        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, animationEnabled: false }} />
                    )}
                    {state.isSignout && (
                        <Stack.Screen name="Login" component={AuthStackScreen} options={{ headerShown: false, animationEnabled: false }} />
                    )}
                    {state.isSignin && (
                        <Stack.Screen name="App" component={AppStackScreen} options={{ headerShown: false, animationEnabled: false }} />
                    )}
                </Stack.Navigator>
              </NavigationContainer>
          </AuthContext.Provider>
      )
}
