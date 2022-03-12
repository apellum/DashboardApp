import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './Header'
import NewProfile from './NewProfile';


const Dashboard = ({ navigation, loggedInUser, updateUsers, loggedIn }) => {

  return (
    <View>
        {loggedIn ? <Header navigation={navigation} loggedIn={loggedIn}/> : null}
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
        textAlign: 'center'
    },
    name: {
        flex: 1,
        marginVertical: 0,
        left: 75,
        borderRadius: 15,
        color: '#fff'
    }
  });
export default Dashboard;