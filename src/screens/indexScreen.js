import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
//import { Context as ImageContext } from '../context/ImageContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);
  return <View>
    <FlatList 
      data={state}
      keyExtractor={ post => post.title}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id})} >
            <View style={styles.row}>
              <Text style={styles.title}>{item.id} - {item.title} - {item.content}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
                <Feather style={styles.icon} name='trash' />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  </View>
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name='plus' size={30} />
      </TouchableOpacity>
    ),
  } 
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
