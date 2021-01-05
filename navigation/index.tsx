import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image, View, Text, TouchableOpacity } from 'react-native';
import MessagesScreen from '../screens/MessagesScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false}}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen 
        name="Messages" 
        component={MessagesScreen} 
        options={({ navigation, route}) =>({ 
          title: '  '+ route.params.name,
          headerLeft: ()=> (
            <View style={{ flexDirection:'row', alignItems: 'center',marginRight: 20}}>
              <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color='#C94B86' />
              </TouchableOpacity>
              <Image 
                source={{ uri: route.params.imageUri}}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  marginHorizontal: 10,
                }}
              />
            </View>
            
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row',justifyContent: 'space-between',alignItems:'center',marginRight: 20}}>
              <Ionicons name='call' size={30} color='#C94B86' style={{ marginHorizontal: 10}} />
              <Ionicons name='videocam' size={30} color='#C94B86' style={{ marginHorizontal: 10}} />
              <Ionicons name='information-circle' size={30} color='#C94B86' style={{ marginHorizontal: 10}} />
            </View>
          )
        })} 
      
      />
    </Stack.Navigator>
  );
}
