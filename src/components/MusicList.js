import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext, themes } from '../context/ThemeContext';

const musicData = [
  {
    id: '1',
    title: 'Please Please Please',
    artist: 'Sabrina Carpenter',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg-6uRWPrERgpi1TXrh6TvfZSmncelAYh2ZA&s', 
  },
  {
    id: '2',
    title: 'Die With A Smile',
    artist: 'Bruno Mars, Lady Gaga',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/11/ae/f2/11aef294-f57c-bab9-c9fc-529162984e62/24UMGIM85348.rgb.jpg/600x600bf-60.jpg', 
  },
  {
    id: '3',
    title: 'Sining',
    artist: 'Dionela ft. Jay R',
    image: 'https://i.ytimg.com/vi/t5UaEZrBHzQ/maxresdefault.jpg', 
  },
];

export default function MusicList({ onSelect }) {
  const { theme, colorScheme } = useContext(ThemeContext);
  const themeStyles = themes[theme][colorScheme]; 

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onSelect(item)}>
    
      <Image source={{ uri: item.image }} style={styles.albumImage} />
      
  
      <View style={styles.songInfo}>
        <Text style={[styles.songTitle, themeStyles.text]}>{item.title}</Text>
        <Text style={[styles.artistText, themeStyles.text]}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, themeStyles.background]}>
      <Text style={[styles.title, themeStyles.text]}>iFumes</Text>
      
      <FlatList
        data={musicData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 3
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 120,
    paddingBottom: 50 
  },
 
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 25,
  },
  songInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  artistText: {
    fontSize: 14,
    color: '#666',
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
