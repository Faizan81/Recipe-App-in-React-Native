import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import useFirebaseAuth from '../CustomHooks/useFirebaseAuth';


export default function Login() {

  async function handlelogin() {
    try {
      await SigninUser(userName, userPassword)
      if (userName == '' || userPassword == '') {
        Alert.alert('Warning!', "Please fill your credentials to continue.")
        return
      }
      navigation.navigate('Home')
    } catch (error) {
      Alert.alert("Warning!", error)
      return
    }
  }

  const [userName, setUserName] = useState();
  const [userPassword, setPassword] = useState();
  const navigation = useNavigation()
  const { SigninUser } = useFirebaseAuth()

  return (

    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='black' />
      <View style={styles.topcontainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/logo3.jpg')}
        />
      </View>

      <View style={styles.midcontainer}>
        <View style={styles.fieldcont}>
          <Image
            style={styles.fieldsLogo}
            source={require('../assets/usericon.png')}
          />
          <TextInput placeholder='email' style={styles.inputfields} onChangeText={newUserName => setUserName(newUserName)}>
          </TextInput>
        </View>
        <View style={styles.fieldcont}>

          <Image
            style={styles.fieldsLogo}
            source={require('../assets/2.png')}
          />
          <TextInput placeholder='Password' style={styles.inputfields} onChangeText={newPass => setPassword(newPass)}>
          </TextInput>
        </View>



        <TouchableOpacity style={styles.button} onPress={handlelogin}>
          <Text style={{ color: 'rgb(84, 84, 99)', fontSize: 16 }}>LogIn</Text>
        </TouchableOpacity>
      </View>



      <View style={styles.bottomcontainer}>
        <Text style={{ color: 'rgb(84, 84, 99)', fontSize: 16 }}> Don't have an account? </Text>

        <TouchableOpacity style={styles.inlineBtn} onPress={() => { navigation.navigate('SignUp') }}>
          <Text style={{ color: 'rgb(80, 200, 120)', fontSize: 18 }}> Register</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  topcontainer: {
    flex: 0.30,
    // backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  midcontainer: {
    flex: 0.50,
    // backgroundColor:'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomcontainer: {
    flex: 0.20,
    // backgroundColor:'red',  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tinyLogo: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
    borderColor: 'white'
  },
  fieldsLogo: {
    height: 20,
    width: 20,
    // backgroundColor:'white',
    // borderColor:'white'
  },
  fieldcont: {
    // flex:1,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  inputfields: {
    width: 220,
    height: 40,
    margin: 10,
    color: 'gray',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    // margin:10,
    marginTop: 20,
    width: 230,
    height: 40,
    borderRadius: 20
  },
  inlineBtn: {
    fontSize: 10,
    color: 'blue'
  }
});
