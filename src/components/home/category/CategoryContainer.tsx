import React, {useMemo} from 'react';
import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NewsArticle} from '../../../@types/type';
import {commonStyles, padding} from '../../../styles/styles';
import {COLORS} from '../../../utils/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getRandomImage} from '../../../utils/randomImages';
import {
  addBookmark,
  removeBookmark,
  selectIsBookmarked,
} from '../../../redux/slices/bookMarkSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

const CategoryContainer = React.memo(
  ({item, index}: {item: NewsArticle; index: number}) => {
    const dispatch = useDispatch();
    const isBookmarkedStatus = useSelector((state: RootState) =>
      selectIsBookmarked(state, item.title),
    );
    const handleOnPress = (url: string) => {
      Linking.openURL(`${url}`).catch(error => Alert.alert(error));
    };
    const handleBookmarkToggle = (event: React.SyntheticEvent) => {
      event.stopPropagation();
      if (isBookmarkedStatus) {
        dispatch(removeBookmark(item.title));
      } else {
        dispatch(
          addBookmark({
            title: item.title,
            article: {...item, urlToImage: item.urlToImage ?? randomImageUrl},
          }),
        );
      }
    };

    let randomImageUrl = useMemo(getRandomImage, []);
    return (
      <TouchableOpacity
        style={[commonStyles.row, styles.main]}
        onPress={() => handleOnPress(item.url)}>
        <View style={{flex: 2}}>
          <Image
            source={
              item.urlToImage ? {uri: item.urlToImage} : {uri: randomImageUrl}
            }
            style={styles.image}
          />
        </View>
        <View style={{flex: 6, paddingHorizontal: 10}}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
        <TouchableOpacity
          style={{flex: 0.5}}
          onPress={event => handleBookmarkToggle(event)}>
          <Icon
            color={isBookmarkedStatus ? COLORS.orange : COLORS.backgroundGray}
            name={'bookmark'}
            size={24}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  },
);

export default CategoryContainer;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: padding.horizontal,
    marginVertical: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  title: {
    color: COLORS.textBlack,
    fontWeight: 'bold',
    fontSize: 12,
  },
  description: {
    color: COLORS.textBlack,
    fontWeight: '500',
    fontSize: 10,
    marginTop: 4,
  },
});
