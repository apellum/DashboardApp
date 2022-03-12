import React from 'react'
import { View, Text, Image } from 'react-native'

const MyProfile = ({ loggedIn }) => {
    if (! (loggedIn)) return <Text>Loading</Text>
  return (
    <View style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#007AFF'}}>Welcome</Text>
        <Text style={{paddingTop: 20, fontSize: 15}}>{loggedIn.name}</Text>
        <Text style={{padding: 15, fontSize: 15}}>{loggedIn.description}</Text>
        <Image style={{height: 100, width: 100, borderRadius: 50}} source={{uri: loggedIn.profile_picture}}/>
    </View>
  )
}

export default MyProfile