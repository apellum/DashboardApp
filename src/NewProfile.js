import React, { useEffect, useCallback, useState } from 'react';
import { View, Switch, Button, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
// import { forceTouchGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/ForceTouchGestureHandler';
import { NavigationContainer } from '@react-navigation/native';


const NewProfile = ({ loggedInUser, updateUsers, navigation }) => {
    const [user, setUser] = useState(null);
    const [newUserForm, setNewUserForm] = useState({
        name: "",
        description: "",
        profile_picture: ""
    })
  const { control, handleSubmit, register, setValue } = useForm();

const handlePost = (obj) => {
    // event.preventDefault();
    fetch(`http://localhost:3001/users`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then((data)=>{
        setNewUserForm('');
        updateUsers(data)
        loggedInUser(data)
    })
  }
  
  const onSubmit = useCallback(formData => {
    handlePost(formData)
    navigation.navigate('My User')
  }, []);
  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
    },
    []
  );
  return (
    <View>
      <TextInput
        textContentType="name"
        placeholder="Name"
        onChangeText={onChangeField('name')}
      />
      <TextInput
        placeholder="Description"
        onChangeText={onChangeField('description')}
      />
      <TextInput
        autoComplete={false}
        autoCorrect={false}
        placeholder="Profile Picture URL"
        onChangeText={onChangeField('profile_picture')}
      />
      <Button title="Submit" onPress={handleSubmit((user) => setUser(JSON.stringify(user))),
        handleSubmit(onSubmit)
    } />
    </View>
  );
};

export default NewProfile;