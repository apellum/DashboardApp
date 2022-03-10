import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import EditPage from './EditPage'

const Dashboard = () => {
    const name = 'Drew Pellum'
    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]
    const initials = firstName[0] + lastName[0]
    console.log(initials)
  return (
    <View style={styles.container}>
        <View style={styles.nav}>
            <View style={{flex: 1, justifyContent: 'center', left: 66}}>
                <Text style={styles.text}>Dashboard</Text>
            </View>
            <View style={styles.name}>
                <Button title={initials} ></Button>
            </View>
        </View>
        <EditPage/>
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
export default Dashboard