import React, {useEffect, useRef} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../utils/theme';
import {commonStyles} from '../../styles/styles';
import {useNavigation} from '@react-navigation/native';

const SearchInput = ({
  onIconPress,
  onChangeText,
  value,
}: {
  onIconPress: () => void;
  onChangeText: (text: string) => void;
  value: string;
}) => {
  const inputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={[commonStyles.row]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="chevron-left"
          size={20}
          color="#b3b1b1"
          style={{marginRight: 10}}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor={COLORS.desGray}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity style={styles.icon} onPress={() => onIconPress()}>
          <Icon name="search" size={20} color="#b3b1b1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    marginRight: 30,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 20,
    color: COLORS.textBlack,
    textDecorationLine: 'none',
    textDecorationColor: COLORS.white,
  },
  icon: {
    backgroundColor: COLORS.primaryBlue,
    padding: 10,
    paddingLeft: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default SearchInput;
