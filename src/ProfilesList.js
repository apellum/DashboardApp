import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import ProfileCard from './ProfileCard'

const ProfilesList = () => {
    const [userList, setUserlist] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/users")
        .then(resp => resp.json())
        .then(usersDb => setUserlist(usersDb))
    }, [])
    const usersArray = userList.map((user, index) => <ProfileCard key={user.id} user={user} />)
  return (
    <ScrollView>
        {usersArray}
    </ScrollView>
  )
}

export default ProfilesList