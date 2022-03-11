import { UserInterfaceIdiom } from 'expo-constants'
import React from 'react'
import { Text } from 'react-native-paper'
import { View, Image } from 'react-native'

const ProfileCard = ({user}) => {
    const picture = (user.profile_picture)
  return (
      <View key={user.id} style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
          <Text>{user.name}</Text>
          <Text>{user.description}</Text>
          <Image style={{width:100, height: 100, borderRadius: 50}} source={{uri: picture}}/>
      </View>
  )
}

export default ProfileCard