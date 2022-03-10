import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import EditPage from './EditPage'
import Header from './Header'


const Dashboard = () => {
    // const [editForm, setEditForm] = useState([])
    const name = 'Drew Pellum'
    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]
    const initials = firstName[0] + lastName[0]

    const people = [
        drew = {
            first: "Drew",
            last: "Pellum",
            description: "Loves to code",
            profilePic: null
        },
        steve = {
            first: "Steve",
            last: "Wright",
            description: "Plays with Dog",
            profilePic: null
        }
    ]

    // use effect to bring in the profiles
    // pass in the state to the edit page
    // const handlePressEdit = () => {

    // }
  return (
//         <SafeAreaProvider>
//             <View style={styles.container}>
//                 <HeaderRNE
//               rightComponent={
//                   <View style={styles.headerRight}>
//                     <TouchableOpacity >
//                       <Icon name="description" color="white" />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       style={{ marginLeft: 10 }}
                      
//                     >
//                       <Icon type="antdesign" name="rocket1" color="white" />
//                     </TouchableOpacity>
//                   </View>
//               }
//               centerComponent={{ text: 'Header', style: styles.heading }}
//                 />
//             </View>
//       </SafeAreaProvider>
//   )
// }
    <View>
        <Header initials={initials}/>
        {/* <ProfilesList people={people}/> */}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    },
    nav: {
        height: 50,
        backgroundColor: '#345678',
        paddingTop: 15,
        width: '100%',
        marginVertical: 0,
        flexDirection: 'row',
        top: -350
    },
    text: {
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        textAlign: 'center'
    },
    name: {
        flex: 1,
        // paddingTop: 15,
        marginVertical: 0,
        left: 75,
        borderRadius: 15,
        color: '#fff'
    }
  });
export default Dashboard;