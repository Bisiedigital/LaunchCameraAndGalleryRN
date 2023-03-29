import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';

// import { images } from '../assets/images';

export function PhotoPickerAvatar({uri, onPress}) {
  return (
    <View style={styles.avatar}>
      <TouchableOpacity onPress={onPress}>
      <Text>Photo: </Text>
        <Image
          // onPress={onPress}
          style={styles.avatarImage}
          source={uri ? {uri} : require('../assets/images/photoAvatar.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    marginTop: '40%',
  },
  avatarImage: {
    height: 150,
    width: 150,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'gray',
    alignSelf: 'center',
  },
});
