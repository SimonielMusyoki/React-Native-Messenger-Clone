import { EvilIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Text } from '../Themed'

export type ChatProps = {

}

const Chat = (props) => {

    const {
        id,
        name,
        imageUri,
        lastMessage,
        isMe,
        isRead
    } = props.chat

    const renderCharReadStatus = () => {
        if( isRead && isMe){
            return (<Image
             source={{ uri: imageUri }}
             resizeMode="cover"
             style={styles.messageReadImage}
            />)
         }else if( !isRead && isMe){
             return (
                 <EvilIcons name="check" size={30} color='gray' />
             )
         }else{
             return (
                 <View style={styles.chatBubble}><Text>1</Text></View>
             )
         }
    }
    
    return(
        <TouchableWithoutFeedback>
            <View>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                    <Image source={{ uri: imageUri }} resizeMode="cover" style={styles.image} />
                    </View>
                    <View>
                        
                    </View>
                    <View style={styles.chatContainer}>
                        <Text style={styles.profileName}>{name}</Text>
                        <Text style={styles.message}>{ isMe ? "You:  " : ''}{lastMessage}</Text>
                    </View>
                    <View style={{ width: "5%"}}>
                        { renderCharReadStatus() }                        
                    </View>            
                </View>
                <View style={styles.separator}></View>         
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 5
    },
    imageContainer: { 
        width: "15%", 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
    chatContainer: { 
        width: "75%"
    },
    profileName: { 
        fontSize: 18, 
        color:'white'
    },
    message: { 
        fontSize: 16, 
        color:'#d9d9d9',
        paddingRight:10,
    },
    messageReadImage: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
    },
    chatBubble: { 
        width: 25, 
        height: 25,
        borderRadius: 12.5, 
        backgroundColor: 'gray',
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight: 10
    },
    separator: {
        width: Dimensions.get('window').width * 0.8,
        height: 1,
        marginVertical: 3,
        backgroundColor: '#000',
        marginLeft: Dimensions.get('window').width * 0.15
    }
})
export default Chat;