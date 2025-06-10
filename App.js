import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import UploadDocScreen from './screens/UploadDocScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home">
              {props => <HomeScreen {...props} onLogout={() => setUser(null)} />}
            </Stack.Screen>
            <Stack.Screen name="Schedule" component={ScheduleScreen} />
            <Stack.Screen name="Upload" component={UploadDocScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {props => <LoginScreen {...props} onLogin={setUser} />}
            </Stack.Screen>
            <Stack.Screen name="Register" options={{ headerShown: false }}>
              {props => <RegisterScreen {...props} onRegister={setUser} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
