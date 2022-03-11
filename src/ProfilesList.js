import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { List, Text } from 'react-native-paper'
import ProfileCard from './ProfileCard'

const ProfilesList = () => {
    const [userList, setUserlist] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/users")
        .then(resp => resp.json())
        .then(usersDb => setUserlist(usersDb))
    }, [])
    const usersArray = userList.map((user, index) => <ProfileCard user={user} />)
  return (
    //   <List>{usersArray}</List>
    <View>
        {usersArray}
    </View>
  )
}

export default ProfilesList