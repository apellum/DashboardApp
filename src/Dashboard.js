import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import EditPage from './EditPage'
import Header from './Header'
import { NavigationContainer } from '@react-navigation/native';
import NewProfile from './NewProfile';


const Dashboard = ({ navigation, loggedInUser, updateUsers }) => {
    const [currentUser, setCurrentUser] = useState(null)
    // const [editForm, setEditForm] = useState([])
    const name = 'Drew Pellum'
    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]
    const initials = firstName[0] + lastName[0]

    // use effect to bring in the profiles
    // pass in the state to the edit page
    // const handlePressEdit = () => {
    // }


  return (
    <View>
        <Header initials={initials} currentUser={currentUser} navigation={navigation}/>
        {/* <ProfilesList people={people}/> */}
        <View style={{justifyContent: 'center', alignItems: 'center', top: 150, zIndex: -1}}>
            <NewProfile navigation={navigation} loggedInUser={loggedInUser} updateUsers={updateUsers}/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    },
    nav: {
        height: 50,
        backgroundColor: '#345678',
        paddingTop: 15,
        width: '100%',
        marginVertical: 0,
        flexDirection: 'row',
        top: -350
    },
    text: {
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        textAlign: 'center'
    },
    name: {
        flex: 1,
        // paddingTop: 15,
        marginVertical: 0,
        left: 75,
        borderRadius: 15,
        color: '#fff'
    }
  });
export default Dashboard;