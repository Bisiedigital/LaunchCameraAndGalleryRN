import React, {useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import {PhotoPickerAvatar} from './src/components/PhotoPickerAvatar';
import {IdPickerAvatar} from './src/components/IdPickerAvatar';

import {PhotoPickerModal} from './src/components/PhotoPickerModal';
import {IdPickerModal} from './src/components/IdPickerModal';

export default function App() {
  const [photoPickerResponse, setPhotoPickerResponse] = useState(null);
  const [visiblePhoto, setVisiblePhoto] = useState(false);

  const [idPickerResponse, setIdPickerResponse] = useState(null);
  const [visibleId, setVisibleId] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPhotoPickerResponse);
  }, []);

  const pressGalleryForId = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setIdPickerResponse);
  }, []);

  const pressCameraForPhoto = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPhotoPickerResponse);
  }, []);

  const pressCameraForId = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setIdPickerResponse);
  }, []);

  const photo_uri = photoPickerResponse?.assets && photoPickerResponse.assets[0].uri;
  const id_uri = idPickerResponse?.assets && idPickerResponse.assets[0].uri;

  return (
    <View style={styles.screen}>
      <View>
        <PhotoPickerAvatar uri={photo_uri} onPress={() => setVisiblePhoto(true)} />
        <PhotoPickerModal
          isVisible={visiblePhoto}
          onClose={() => setVisiblePhoto(false)}
          onImageLibraryPress={pressCameraForPhoto}
          onCameraPress={pressCameraForPhoto}
        />
      </View>
      <View>
        <IdPickerAvatar uri={id_uri} onPress={() => setVisibleId(true)} />
        <IdPickerModal
          isVisible={visibleId}
          onClose={() => setVisibleId(false)}
          onImageLibraryPress={pressGalleryForId}
          onCameraPress={pressCameraForId}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#f2f2fC',
  },
});
