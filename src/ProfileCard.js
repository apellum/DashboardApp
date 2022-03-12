import React from 'react'
import { Text } from 'react-native-paper'
import { View, Image } from 'react-native'

const ProfileCard = ({user}) => {
    const picture = (user.profile_picture)
  return (
      <View key={user.id} style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{paddingTop: 20, fontSize: 15}}>{user.name}</Text>
          <Text style={{paddingTop: 20, fontSize: 15}}>{user.description}</Text>
          <Image style={{width:150, height: 150, borderRadius: 50}} source={{uri: picture}}/>
      </View>
  )
}

export default ProfileCard