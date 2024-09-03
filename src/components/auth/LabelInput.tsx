import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../utils/theme';
import {commonStyles} from '../../styles/styles';

type LabelInputType = {
  iconPress?: () => void;
  postIcon?: string;
  placeHolder: string;
  onChange?: (text: string) => void;
  value?: string;
  secureTextEntry?: boolean;
};
const LabelInput = ({
  iconPress,
  postIcon,
  placeHolder,
  onChange,
  value,
  secureTextEntry,
}: LabelInputType) => (
  <View
    style={[
      commonStyles.row,
      {
        backgroundColor: COLORS.backgroundGray,
        borderRadius: 15,
        marginHorizontal: 20,
      },
    ]}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor={COLORS.desGray}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
      {postIcon && (
        <Icon
          onPress={iconPress}
          name={postIcon}
          size={20}
          color={COLORS.primaryBlue}
          style={styles.icon}
        />
      )}
    </View>
  </View>
);

export default LabelInput;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.backgroundGray,
    borderRadius: 15,
    backgroundColor: COLORS.backgroundGray,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 20,
    color: COLORS.textBlack,
    textDecorationLine: 'none',
    textDecorationColor: COLORS.white,
    backgroundColor: COLORS.backgroundGray,
    borderRadius: 15,
  },
  icon: {
    backgroundColor: COLORS.backgroundGray,
    paddingRight: 15,
  },
});
