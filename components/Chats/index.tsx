import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import {Text} from '../Themed'
import chats  from '../../data/chats'
import Chat from '../Chat';

export type ChatsProps = {

}

const Chats = () => {
    return (
        <FlatList 
            data={chats}
            keyExtractor={ item => item.id}
            renderItem={({item}) => <Chat chat={item} />}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default Chats;