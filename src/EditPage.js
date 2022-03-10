import React from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'

const EditPage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <TextInput>Name</TextInput>
            <Button title='Enter'></Button>
        </View>
        <View style={styles.row}>
            <TextInput>Description of Yourself</TextInput>
            <Button title='Enter'></Button>
        </View>
        <View style={styles.row}>
            <TextInput>Profile Picture</TextInput>
            <Button title='Enter'></Button>
        </View>
        <View>
            <Button title='Save'></Button>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 200,
      flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    }
  });
export default EditPage