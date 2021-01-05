import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Image, ImageBackground, FlatList } from 'react-native';

import users from '../data/users';
import { Text, View } from '../components/Themed';
import status from '../data/status'


export default function PeopleScreen() {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const [activeTab, setActiveTab] = useState('people')

  const renderTopButtons = () => (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={ activeTab=='people'? styles.activeTopButton: styles.topButtons}
        onPress = {() => setActiveTab('people')}
      >
        <Text style={styles.buttonText}>ACTIVE (21)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={ activeTab=='stories'? styles.activeTopButton: styles.topButtons}
        onPress = {() => setActiveTab('stories')}
      >
        <Text style={styles.buttonText}>STORIES (21)</Text>
      </TouchableOpacity>
    </View>
  )
  const renderUserComponent = ({item}) =>(
    <TouchableOpacity style={{ flexDirection: 'row', alignItems:'center', marginHorizontal: 20, marginVertical: 10}}>
      <View>
        <Image 
          source={{ uri: item.imageUri}}
          resizeMode="cover"
          style={{
            width: 40,
            height: 40,
            borderRadius:20,
          }}
        />
        <View style={{ backgroundColor: '#0f0', width: 10, height: 10, borderRadius: 5, position: 'absolute', right: 2, bottom: 2, borderColor: '#000', borderWidth: 2}}>
          
        </View>
      </View>
      
      <Text style={{ fontSize: 18,fontWeight: 'bold' }}>  { item.name} </Text>
    </TouchableOpacity>
  )
  const renderActiveUsers = () => (
    <View>
      <FlatList 
        data={users}
        keyExtractor={ item => item.id}
        renderItem ={renderUserComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )

  const renderStories = () => {

    const renderItem = ({ item}) => (
      <View style={{ width: width * 0.5 - 20, height: height*0.35, margin: 10, borderRadius: 10 }}>

      <ImageBackground 
          source= {{ uri: item.imageUri}}
          resizeMode="cover"
          style={{
            width: '100%',
            height: height*0.35,
          }}
          imageStyle={{ borderRadius: 15}}
        >
          <View style={{ width: 60, height: 60, margin: 5, borderRadius: 30, justifyContent: 'center', alignItems:'center'}}>
            {/* <Entypo name="plus" size={50} color='#000' /> */}
            <Image 
              source={{ uri: item.imageUri}}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                padding: 5,
                borderColor: '#3C5998',
                borderWidth: 5,
              }}
            />
          </View>
          <View style={{ position: 'absolute', top: 5, right: 10, width: 25, height: 25, borderRadius: 25, justifyContent: 'center', alignItems:'center'}}>
            <Text style={{ padding: 5}}>{item.statusCount}</Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: 'bold',position:'absolute', bottom: 10,  left: 10}}>{ item.name }</Text>
        </ImageBackground>
        </View>
    )
    return (
      <FlatList 
          data={status}
          keyExtractor={ item => item.id}
          renderItem={renderItem}
          numColumns= {2}
          showsVerticalScrollIndicator={false}
        />
      
    )
  }

  return (
    <View style={styles.container}>
      { renderTopButtons() }
      { activeTab =='people' ? renderActiveUsers() : renderStories()}            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonsContainer:{
    flexDirection: 'row', 
    width: '100%'
  },
  topButtons:{
    fontWeight: 'bold',
    marginHorizontal: 20,
    backgroundColor: '#000',
    width: Dimensions.get('window').width * 0.5 - 40, 
    borderRadius: 20,      
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTopButton:{
    fontWeight: 'bold',
    marginHorizontal: 20,
    backgroundColor: '#404040',
    width: Dimensions.get('window').width * 0.5 - 40, 
    borderRadius: 20,      
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: 'white',
    paddingVertical: 5,
    fontSize: 16
  }
});
