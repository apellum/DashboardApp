import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Avatar, Menu, Button, Divider, Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';


const Header = ({initials, navigation}) => {
    const [anchorEl, setAnchorEl] = useState(false);

    const handleMenuOpen = () => setAnchorEl(true)

    const closeMenu = () => setAnchorEl(false)

  return (
      <Provider>
        <Appbar.Header>
        <Appbar.Content style={styles.title} title="Dashboard" />
        <View
            style={{
            //   paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            }}>
            <Menu
            visible={anchorEl}
            onDismiss={closeMenu}
            anchor={<Button onPress={handleMenuOpen}>
                <Avatar.Text size={30} label={initials} />
            </Button>}>
            <Menu.Item onPress={() => {navigation.navigate('My User'), closeMenu()}} title="My Profile" />
            <Menu.Item onPress={() => {navigation.navigate('Edit'), closeMenu()}} title="Edit Profile" />
            <Divider />
            <Menu.Item onPress={() => {navigation.navigate('Users List'), closeMenu()}} title="All Profiles" />
            </Menu>
        </View>
        </Appbar.Header>
      </Provider>
  )
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40
    }
  });

export default Header