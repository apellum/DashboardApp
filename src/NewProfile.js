import React, { useCallback, useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import { useForm } from 'react-hook-form';


const NewProfile = ({ loggedInUser, updateUsers, navigation }) => {
    const [user, setUser] = useState(null);
    const [newUserForm, setNewUserForm] = useState({
        name: "",
        description: "",
        profile_picture: ""
    })
  const { control, handleSubmit, setValue, reset } = useForm();

const handlePost = (obj) => {
    fetch(`https://sandbox-dashboard-server.herokuapp.com/users`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then((data)=>{
        setNewUserForm({name: '', description: '', profile_picture: ''});
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
        style={{height: 40, width: 200, borderColor: 'blue', borderWidth: 1,  marginBottom: 20 }}
        autoComplete={false}
        autoCorrect={false}
        textContentType="name"
        placeholder="First and Last Name"
        onChangeText={onChangeField('name')}
      />
      <TextInput
        style={{height: 40, width: 200, borderColor: 'blue', borderWidth: 1,  marginBottom: 20 }}
        autoComplete={false}
        autoCorrect={false}
        multiline
        numberOfLines={4}
        placeholder="Description"
        onChangeText={onChangeField('description')}
      />
      <TextInput
        style={{height: 40, width: 200, borderColor: 'blue', borderWidth: 1,  marginBottom: 20 }}
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