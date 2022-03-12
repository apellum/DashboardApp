import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Dashboard from './Dashboard';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditPage from './EditPage';
import ProfilesList from './ProfilesList';
import NewProfile from './NewProfile';
import MyProfile from './MyProfile';
import Header from './Header';


export default function App({ navigation }) {
  const [loggedIn, setLoggedIn] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(resp => resp.json())
      .then(data => setUsers(data))
  }, [])

  // const name = 'Drew Pellum'
  // const firstName = loggedIn.name.split(' ')[0]
  // const lastName = loggedIn.name.split(' ')[1]
  // const initials = firstName[0] + lastName[0]

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen name="Sandbox">
          {(props) => <Dashboard
            {...props}
            loggedInUser={setLoggedIn}
            loggedIn={loggedIn}
            updateUsers={setUsers}
          />}
        </Stack.Screen>
        <Stack.Screen name="Edit">
          {(props) => <EditPage
            {...props}
            initials={initials}
            loggedInUser={setLoggedIn}
            loggedIn={loggedIn}
          />}
        </Stack.Screen>
        <Stack.Screen name="Users List">
          {(props) => <ProfilesList
            {...props}
          />}
        </Stack.Screen>
        <Stack.Screen name="Create User">
          {(props) => <NewProfile
            {...props}
            updateUsers={setUsers}
            loggedInUser={setLoggedIn}
          />}
        </Stack.Screen>
        <Stack.Screen name="My User">
          {(props) => <MyProfile
            {...props}
            updateUsers={setUsers}
            loggedIn={loggedIn}
          />}
        </Stack.Screen>
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
