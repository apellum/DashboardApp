import React, { useState, useEffect } from 'react'
import { List, Text } from 'react-native-paper'

const ProfilesList = () => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(users => setUserlist(users))
    }, [])
    console.log(userList)
  return (
      <Text>Hey</Text>
  )
}

export default ProfilesList