import React, { useCallback, useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

type FormBottomSheetProps = {
  theme: string;
};

const FormBottomSheet = ({ theme }: FormBottomSheetProps) => {
  const [sex, setSex] = useState('');

  const clickHandler = (sex: string) => {
    setSex(sex);
    bottomSheetModalRef.current?.close();
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        animatedIndex={{
          value: 1,
        }}
      />
    ),
    []
  );
  return (
    <BottomSheetModalProvider>
      <TouchableOpacity onPress={handlePresentModalPress}>
        <TextInput
          className={`${theme === 'dark' ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'}  mx-5 h-14 rounded-md p-4`}
          placeholder="Sex"
          editable={false}
          value={sex}
        />
      </TouchableOpacity>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        snapPoints={['30%']}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        detached>
        <BottomSheetView
          className={`${theme === 'dark' ? 'bg-container-dark' : 'bg-container-light'} flex h-96   `}>
          <Text
            className={`${theme === 'dark' ? 'border-b-background-dark text-text-dark' : 'border-b-background-light text-text-light'}  border-b-2 pb-6 pl-5 text-xl font-bold`}>
            Select Sex
          </Text>
          <View className="mt-5 flex">
            <Pressable
              onPress={() => clickHandler('Male')}
              className={`${theme === 'dark' ? ' border-b-background-dark' : ' border-b-background-light'} border-b-2 p-5 `}>
              <Text className={`${theme === 'dark' ? 'text-text-dark' : 'text-text-light'} `}>
                Male
              </Text>
            </Pressable>

            <Pressable
              onPress={() => clickHandler('Female')}
              className={`${theme === 'dark' ? 'text-text-dark' : 'text-text-light '}  p-5 `}>
              <Text className={`${theme === 'dark' ? 'text-text-dark' : 'text-text-light'} `}>
                Female
              </Text>
            </Pressable>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default FormBottomSheet;
