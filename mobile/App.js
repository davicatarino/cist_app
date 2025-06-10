import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import UploadDocScreen from './screens/UploadDocScreen';
import ChatScreen from './screens/ChatScreen';
import theme from './theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs({ onLogout }) {
  return (
    <Tab.Navigator screenOptions={{ headerStyle: { backgroundColor: theme.colors.primary }, headerTintColor: '#fff' }}>
      <Tab.Screen name="In\u00edcio">
        {props => <HomeScreen {...props} onLogout={onLogout} />}
      </Tab.Screen>
      <Tab.Screen name="Agendar" component={ScheduleScreen} />
      <Tab.Screen name="Documentos" component={UploadDocScreen} />
      <Tab.Screen name="Suporte" component={ChatScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  const navTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, primary: theme.colors.primary }
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Main">
            {props => <MainTabs {...props} onLogout={() => setUser(null)} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login">
              {props => <LoginScreen {...props} onLogin={setUser} />}
            </Stack.Screen>
            <Stack.Screen name="Register">
              {props => <RegisterScreen {...props} onRegister={setUser} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
