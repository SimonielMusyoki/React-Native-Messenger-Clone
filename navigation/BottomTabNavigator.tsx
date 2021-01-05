import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { Image, TouchableOpacity,View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import PeopleScreen from '../screens/PeopleScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Chats"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble" color={color}  size={30} style={{ marginBottom: -3 }}/>,
          tabBarBadge: 16,
          tabBarBadgeStyle: {
            color: '#fff',
            backgroundColor: '#000'
          }
        }}
      />
      <BottomTab.Screen
        name="People"
        component={PeopleScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="people-sharp" color={color}  size={30} style={{ marginBottom: -3 }}/>,
          tabBarBadge: 20,
          tabBarBadgeStyle: {
            color: 'green',
            backgroundColor: Colors[colorScheme].background
          }
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator<TabOneParamList>();

function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          headerTitle: 'Chats',
          headerLeft: ()=> (
            <Image 
              source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*'}}
              resizeMode="cover"
              style={{
                width: 45,
                height: 45,
                borderRadius: 22.5,
              }}
            />
          ),
          headerLeftContainerStyle:{
            marginLeft: 20,
          },
          headerRight: ()=> (
            <View style={{ flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity style={{ 
                width: 40, 
                height: 40, 
                backgroundColor: '#666666', 
                borderRadius: 20, 
                justifyContent: 'center', 
                alignItems: 'center'}}>
                <FontAwesome name="camera" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={{ 
                width: 40, 
                height: 40, 
                backgroundColor: '#666666', 
                marginLeft: 15,
                borderRadius: 20, 
                justifyContent: 'center', 
                alignItems: 'center'}}>
                <Ionicons name="pencil" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          )
         }}
      />
    </HomeScreenStack.Navigator>
  );
}

const PeopleScreenStack = createStackNavigator<TabTwoParamList>();

function PeopleScreenNavigator() {
  return (
    <PeopleScreenStack.Navigator>
      <PeopleScreenStack.Screen
        name="TabTwoScreen"
        component={PeopleScreen}
        options={{ 
          headerTitle: 'People',
          headerLeft: ()=> (
            <Image 
              source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*'}}
              resizeMode="cover"
              style={{
                width: 45,
                height: 45,
                borderRadius: 22.5,
              }}
            />
          ),
          headerLeftContainerStyle:{
            marginLeft: 20,
          },
          headerRight: ()=> (
            <View style={{ flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity style={{ 
                width: 40, 
                height: 40, 
                backgroundColor: '#666666', 
                borderRadius: 20, 
                justifyContent: 'center', 
                alignItems: 'center'}}>
                <FontAwesome name="address-book" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={{ 
                width: 40, 
                height: 40, 
                backgroundColor: '#666666', 
                marginLeft: 15,
                borderRadius: 20, 
                justifyContent: 'center', 
                alignItems: 'center'}}>
                <Ionicons name="person-add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          )
         }}
      />
    </PeopleScreenStack.Navigator>
  );
}
