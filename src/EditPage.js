import React, { useState, useCallback } from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'
import { useForm } from 'react-hook-form';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const EditPage = ({initials, loggedIn, loggedInUser, navigation}) => {
    const [editForm, setEditForm] = useState({
        name: "",
        description: "",
        profile_picture: ""
    })

    const { control, handleSubmit, setValue } = useForm();

    function updateUser (user) {
        fetch("http://localhost:3001/users/" + loggedIn.id, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(user => {
            loggedInUser(user)
            setEditForm(user)
        })
    
    }

    const onSubmit = useCallback(formData => {
        updateUser(formData)
        navigation.navigate('My User')
      }, []);
      const onChangeField = useCallback(
        name => text => {
          setValue(name, text);
        },
        []
      );
  return (
      <View style={{width: '100%', height: '100%'}}>
         <View style={styles.container}>
            <View style={styles.row}>
                <TextInput
                placeholder={loggedIn.name}
                onChangeText={onChangeField('name')}
                />
            </View>
            <View style={styles.row}>
                <TextInput 
                placeholder={loggedIn.description}
                onChangeText={onChangeField('description')}
                />
            </View>
            <View style={styles.row}>
                <TextInput 
                placeholder={loggedIn.profile_picture}
                onChangeText={onChangeField('profile_picture')}
                />
            </View>
            <View>
                <Button title='Save' onPress={handleSubmit((user) => setUser(JSON.stringify(user))),
                handleSubmit(onSubmit)
                 } />
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