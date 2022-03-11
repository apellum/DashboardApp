import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const MyProfile = ({ loggedIn }) => {
    console.log("readthis",loggedIn)
  return (
    <View>
        <Text>{loggedIn.name}</Text>
        <Text>{loggedIn.description}</Text>
    </View>
  )
}

export default MyProfile