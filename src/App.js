import React from 'react';
import { StyleSheet } from 'react-native';
import Dashboard from './Dashboard';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditPage from './EditPage';
import ProfilesList from './ProfilesList';


export default function App({navigation}) {

  const name = 'Drew Pellum'
    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]
    const initials = firstName[0] + lastName[0]
  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen 
        name="Sandbox"
        component={Dashboard}
        initials={initials}
        />
        <Stack.Screen name="Edit" component={EditPage} initials={initials}
        />
        <Stack.Screen name="Users List" component={ProfilesList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
