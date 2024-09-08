import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MusicPlayer from './src/components/MusicPlayer';
import MusicList from './src/components/MusicList';
import { ThemeContext, themes } from './src/context/ThemeContext';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('list');
  const [theme, setTheme] = useState('light');
  const [colorScheme, setColorScheme] = useState('red');
  const [selectedTrack, setSelectedTrack] = useState(null);

  const themeStyles = themes[theme][colorScheme];

  const handleSelectTrack = (track) => {
    setSelectedTrack(track);
    setCurrentScreen('player');
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, setTheme, setColorScheme }}>
      <View style={[styles.container, themeStyles.background]}>
        {currentScreen === 'list' ? (
          <MusicList onSelect={handleSelectTrack} />
        ) : (
          <MusicPlayer track={selectedTrack} onBack={() => setCurrentScreen('list')} />
        )}
        <View style={styles.switchContainer}>
          <Text style={styles.uiTheme}>{theme === 'light' ? '☀️' : '🌙'}</Text>
          <Switch
            value={theme === 'dark'}
            onValueChange={toggleTheme}
          />
        </View>
        <View style={styles.colorContainer}>
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'red' }]}
            onPress={() => setColorScheme('red')}
          />
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'blue' }]}
            onPress={() => setColorScheme('blue')}
          />
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'green' }]}
            onPress={() => setColorScheme('green')}
          />
        </View>
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 100

  },
  colorBox: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 50,
  },
  uiTheme:{
  fontSize: 40,
  }
});
