import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'

const MyProfile = ({ loggedIn }) => {
    if (! (loggedIn)) return <Text>Loading</Text>
  return (
    <View style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{loggedIn.name}</Text>
        <Text>{loggedIn.description}</Text>
        <Image style={{height: 100, width: 100, borderRadius: 50}} source={{uri: loggedIn.profile_picture}}/>
    </View>
  )
}

export default MyProfile