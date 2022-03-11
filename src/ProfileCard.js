import { UserInterfaceIdiom } from 'expo-constants'
import React from 'react'
import { Text, Avatar } from 'react-native-paper'
import { View, Image } from 'react-native'

const ProfileCard = ({user}) => {
    console.log(user.profile_picture)
  return (
      <View style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
          <Text>{user.name}</Text>
          <Text>{user.description}</Text>
          <Image  source={{uri: user.profile_picture}}></Image>
      </View>
  )
}

export default ProfileCard