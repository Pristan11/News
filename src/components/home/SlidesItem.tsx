import React from 'react';
import {ImageBackground, View, Text, StyleSheet} from 'react-native';
import {NewsArticle} from '../../@types/type';
import {commonStyles} from '../../styles/styles';
import {DEVICE} from '../../utils/constants';
import {formatDate} from '../../utils/functions';
import Container from '../Container';
import {images} from '../../styles/images';

const SlidesItem = React.memo(({item}: {item: NewsArticle}) => {
  return (
    <ImageBackground
      source={item.urlToImage ? {uri: item.urlToImage} : images.slideLoadImage}
      style={styles.imageBackgournd}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={commonStyles.row}>
          <Text style={styles.author}>{item.source.name}</Text>
          <Container width={20} />
          <Text style={styles.author}>{formatDate(item.publishedAt)}</Text>
        </View>
      </View>
    </ImageBackground>
  );
});
export default SlidesItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    width: DEVICE.width,
    justifyContent: 'center',
  },
  text: {
    fontSize: DEVICE.width * 0.5,
    textAlign: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  content: {
    padding: 20,
    top: DEVICE.width * 0.32,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 0,
  },
  author: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  imageBackgournd: {
    width: DEVICE.width,
    height: DEVICE.width * 0.65,
    opacity: 0.7,
  },
});
