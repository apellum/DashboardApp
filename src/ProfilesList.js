import React from 'react'
import { List } from 'react-native-paper'

const ProfilesList = () => {
    const peopleArray = people.map(person => <li>"Name"{person.first} {person.last}</li>)
    console.log(peopleArray)
  return (
      {peopleArray}
  )
}

export default ProfilesList