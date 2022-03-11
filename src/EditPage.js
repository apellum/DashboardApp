import React from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'
import Header from './Header';

const EditPage = ({initials}) => {
    initials = 'DP'
  return (
      <View>
          <View style={styles.header}>
            <Header initials={initials}/>
          </View>
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
    },
    header: {
        backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: -400,
      height: 200,
      flexDirection: 'column', 
      flexGrow: 1
    }
  });
export default EditPage