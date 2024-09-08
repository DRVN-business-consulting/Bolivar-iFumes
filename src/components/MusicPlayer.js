import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ThemeContext, themes } from '../context/ThemeContext';
import ProgressBar from './ProgressBar';

export default function MusicPlayer({ onBack, track }) {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); 
  const { theme, colorScheme } = useContext(ThemeContext);

  useEffect(() => {
    let interval;
    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => (prev < 100 ? prev + 1 : prev)); 
      }, 100);
    } else if (progress === 100) {
      setIsPlaying(false); 
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  const handlePlayPause = () => {
    if (progress === 100) {
      setProgress(0);
    }
    setIsPlaying(!isPlaying); 
  };

  const themeStyles = themes[theme][colorScheme];

  return (
    <View style={[styles.container, themeStyles.background]}>
      <Image source={{ uri: track.image }} style={styles.albumImage} />
      <Text style={[styles.text, themeStyles.text]}>Now Playing: {track ? track.title : 'Sample Song'}</Text>
      
      <ProgressBar progress={progress} color={themeStyles.text.color} />

      <View style={styles.controls}>
        <TouchableOpacity onPress={handlePlayPause}>
          <Text style={styles.controlButton}>{isPlaying ? '⏸️' : '▶️'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={{fontSize:30}}>⬅️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 140
  },
  text:{
    fontSize: 20,
    paddingTop: 20
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  controlButton: {
    fontSize: 40,
    marginHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 90,
    left: -20
  },
  albumImage: {
    width: 300,
    height: 300,
    borderRadius: 10
    
  }
});
