import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {navigationWithoutProps} from '../../navigation/rootNavigation';

export default class GameItem extends Component {
  render() {
    const {gameItem} = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          navigationWithoutProps('DetailScreen', {id: gameItem.id})
        }>
        <View>
          <View>
            <Image
              style={styles.gameBanner}
              source={{uri: gameItem.preview[0]}}
            />
          </View>
          <View
            style={[
              styles.gameInfo,
              {backgroundColor: gameItem.backgroundColor},
            ]}>
            <Image source={{uri: gameItem.icon}} style={styles.gameIcon} />
            <View style={styles.infoContent}>
              <Text
                style={[styles.textColor, {fontWeight: 'bold', fontSize: 18}]}>
                {gameItem.title}
              </Text>
              <Text style={[styles.textColor, {opacity: 0.7}]}>
                {gameItem.subTitle}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  gameBanner: {
    height: 250,
    aspectRatio: 16 / 9,
  },
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    position: 'absolute',
    bottom: -40,
    left: 10,
    right: 10,
  },
  gameIcon: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  infoContent: {
    width: '80%',
  },
  textColor: {
    color: 'white',
  },
});
