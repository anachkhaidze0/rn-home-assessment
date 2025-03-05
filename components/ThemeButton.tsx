import { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type ThemeButtonProps = {
  theme: string;
  setTheme: any;
};

export const ThemeButton = ({ theme, setTheme }: ThemeButtonProps) => {
  return (
    <View>
      <View className="items-right flex justify-start">
        <TouchableOpacity
          onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="mt-5 flex flex-row items-center">
          <Text className="text-3xl">{theme === 'dark' ? '🌙' : '☀️'}</Text>
          <Text className="text-primary-light dark:text-primary-dark">Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
