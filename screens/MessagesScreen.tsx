import { AntDesign, Entypo, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../components/Themed'
import messages from '../data/messages'
const MessagesScreen = (props) => {

    const width = Dimensions.get('window').width;
    const { imageUri, name} = useRoute().params;
    const [value, onChangeText] = React.useState('Aa');

    const renderHeaderSection = () => (
        
        <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                source={{ uri: imageUri }}
                style={{
                    width: 100, 
                    height: 100,
                    borderRadius: 50
                }}
            />
            <Text style={{ fontSize: 22, paddingHorizontal: 10, fontWeight: 'bold'}}>{name}</Text>
            <Text style={{ fontSize: 18}}>Facebook</Text>
            <Text style={{ fontSize: 18, color: '#4d4d4d'}}>You're friends on Facebook</Text>
            <Text style={{ fontSize: 18, color: '#4d4d4d'}}>Primus to the King of Kandor in Krypton</Text>
            <Text style={{ fontSize: 18, color: '#4d4d4d'}}>Fighter from the El's family</Text>
            <TouchableOpacity style={{ backgroundColor:'#4d4d4d', borderRadius: 20, padding: 10, marginVertical: 10}}>
                <Text>  VIEW PROFILE  </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, color: '#4d4d4d'}}>JAN 05 2021 AT 4:45PM</Text>
        </View>
    )
    
    const renderMessage = ( message, isMe, img) => {

         const bgColor = isMe ? '#D2476F' : '#4f4f4f' ;
         const alignment = isMe ? 'flex-end' : 'flex-start' ;
         const flexAlignment = isMe ? 'column' : 'row';
         const radius = isMe ? { borderTopLeftRadius: 20 }: { borderBottomRightRadius: 20 };
        return (
            <View style={{ width: width, paddingHorizontal: 20, marginVertical: 5, alignItems: alignment, flexDirection: flexAlignment}}>
                { isMe ? null :
                    <Image 
                    source={{ uri: imageUri}}
                    style= {{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        marginRight: 10
                    }}
                />
                }
               <View style={{ maxWidth: width * 0.7, backgroundColor: bgColor, borderTopRightRadius: 20,borderBottomLeftRadius: 20, ...radius, padding: 10}}>
                    { img ? <Image source={{ uri: img }} style={{ width: width * 0.65, height: 150, }} /> : null }
                   <Text style={{ fontSize: 16, padding: 10}}>{message}</Text>
               </View>
            </View>
        )
    }

    const renderItem = ({item}) => {
        let image = '';
        if (item.imageUri != '') { image = item.imageUri}
        return renderMessage(item.message, item.isMe, image)
    }

    return (
        <View style={{ flex: 1}}>
            <FlatList 
                data={messages}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={renderHeaderSection()}
            />
            <View style={{ position:'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#000', padding: 10, flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5 name='dice-four' size={30} color='#0C7EF2' style={styles.icons} />
                <Ionicons name='camera' size={30} color='#0C7EF2' style={styles.icons}  />
                <FontAwesome name='photo' size={30} color='#0C7EF2'  style={styles.icons} />
                <FontAwesome name='microphone' size={30} color='#0C7EF2' style={styles.icons}  />
                <TextInput 
                    style={{ height: 40, borderColor: '#0C7EF2', borderWidth: 1, color: '#fff', flex: 1, borderRadius: 15, paddingLeft: 15}}
                    onChangeText={text => onChangeText(text)}
                    placeholder='Aa'
                    value={value}
                />
                <AntDesign name="like1" size={30} color='#0C7EF2'  style={styles.icons}  />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icons: {
        marginHorizontal: 5
    }
})
export default MessagesScreen;