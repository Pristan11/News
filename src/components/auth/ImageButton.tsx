import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {commonStyles} from '../../styles/styles';
import {COLORS} from '../../utils/theme';
type ImageButtonType = {
  onPress: () => void;
  image: string;
  title: string;
};
function ImageButton({onPress, image, title}: ImageButtonType) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: COLORS.backgroundGray,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}>
      <View style={commonStyles.row}>
        <Image
          source={image ? image : require('../../../assets/images/logo.png')}
          style={{height: 40, width: 40}}
        />
        <Text
          style={{
            color: COLORS.textBlack,
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 10,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ImageButton;
