import React from 'react';

export const themes = {
  light: {
    red: {
      background: { backgroundColor: '#fff' },
      text: { color: 'red' },
    },
    blue: {
      background: { backgroundColor: '#fff' },
      text: { color: 'blue' },
    },
    green: {
      background: { backgroundColor: '#fff' },
      text: { color: 'green' },
    },
  },
  dark: {
    red: {
      background: { backgroundColor: '#000' },
      text: { color: 'red' },
    },
    blue: {
      background: { backgroundColor: '#000' },
      text: { color: 'blue' },
    },
    green: {
      background: { backgroundColor: '#000' },
      text: { color: 'green' },
    },
  },
};

export const ThemeContext = React.createContext();
