
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './screens/Login';
import Home from './screens/Home';


export default function App() {
  const Stack = createStackNavigator()

  return (
   <NavigationContainer>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1,padding:"20px"}}>
       <Stack.Navigator initialRouteName='Login'>
       <Stack.Screen 
       options={{
         headerShown:false
         }}
         name='Login' component={Login} />
       <Stack.Screen 
       options={{
         headerShown:false
         }}
         name='Home' component={Home} />
       </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
   </NavigationContainer>
  );
}
