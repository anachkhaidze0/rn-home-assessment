import React, { useCallback, useContext, useRef } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';

import { ThemeContext } from '~/context/ThemeProvider';
import { ThemeButton } from './ThemeButton';
import FormBottomSheet from './FormBottomSheet';

const HomeScreen = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ScrollView
      className={theme === 'dark' ? 'bg-container-dark' : 'bg-container-light' + `flex`}
      keyboardShouldPersistTaps="handled">
      <View className="h-screen flex-1 gap-y-4">
        <ThemeButton theme={theme} setTheme={setTheme} />
        <Text
          className={`${theme === 'dark' ? 'text-text-dark' : 'text-text-light'}
            pl-6 text-4xl font-semibold`}>
          Profile Info
        </Text>
        <View className="flex">
          <Text
            className={`${theme === 'dark' ? 'text-text-dark' : 'text-text-light'} absolute ml-9 mt-2 text-xs`}>
            Full name
          </Text>
          <TextInput
            className={`${theme === 'dark' ? 'text-text-dark bg-background-dark' : 'text-text-light bg-background-light'}  mx-5 h-14 rounded-md px-4 pt-6`}
            value="Charlie Saris"
          />
        </View>
        <FormBottomSheet theme={theme} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
