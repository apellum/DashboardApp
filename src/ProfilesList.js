import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import ProfileCard from './ProfileCard'

const ProfilesList = () => {
    const [userList, setUserlist] = useState([])

    useEffect(() => {
        fetch("https://sandbox-dashboard-server.herokuapp.com/users")
        .then(resp => resp.json())
        .then(usersDb => setUserlist(usersDb))
    }, [])
    const usersArray = userList.map((user) => <ProfileCard key={user.id} user={user} />)
  return (
    <ScrollView>
        {usersArray}
    </ScrollView>
  )
}

export default ProfilesList