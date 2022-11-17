import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function App() {

  function handleSignIn() {
    auth()
      .signInWithEmailAndPassword('leandro.viana@atxsolucoes.com', '123456')
      .then(result => {
        console.log(result)
      })
      .catch(error => console.error(error))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text>Acessar com firebase!</Text>

      <Button title='Entrar com E-mail e Senha' onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
