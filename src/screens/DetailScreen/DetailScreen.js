import axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import mapIP from '../../utils/common';
import {BackgroundView} from '../../components/index';
import {getSetGameDetailSuccess} from '../../redux/actions/gameAction';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('screen');

class DetailScreen extends Component {
  renderIcon = () => {
    let icons = [];
    for (i = 0; i < 5; i++) {
      icons.push(
        <Ionicons
          key={i}
          name="ios-star"
          color={
            Math.floor(this.props.gameDetail.rating) > i ? '#add8e6' : '#ddd'
          }
          size={20}
          style={{marginLeft: 5}}
        />,
      );
    }
    return icons;
  };

  componentDidMount() {
    this.props.setGameDetail(this.props.route.params.id);
  }

  render() {
    const {gameDetail: game} = this.props;
    return (
      <BackgroundView style={{backgroundColor: game.backgroundColor}}>
        {!!game.title && (
          <>
            <View style={styles.containerTop}>
              <Image
                style={styles.imageBanner}
                source={{uri: game.preview[0]}}
              />
            </View>
            <TouchableOpacity
              style={{position: 'absolute', left: 10, top: 40}}
              onPress={() => this.props.navigation.goBack()}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: 'gray',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons name="ios-close" size={40} color="white" />
              </View>
            </TouchableOpacity>
            <View style={styles.containerBottom}>
              <View style={styles.contentContainer}>
                <Image style={styles.imageContent} source={{uri: game.icon}} />
                <View style={styles.infoItem}>
                  <Text style={styles.itemTitle}>{game.title}</Text>
                  <Text style={styles.itemSubTitle}>{game.subTitle}</Text>
                </View>
                <View style={styles.borderIcon}>
                  <Ionicons
                    name="cloud-download-outline"
                    color="white"
                    size={25}
                  />
                </View>
              </View>
              <View style={styles.previewContainer}>
                <View style={{flexDirection: 'row'}}>{this.renderIcon()}</View>
                <View>
                  <Text style={{fontSize: 18, color: 'white', opacity: 0.7}}>
                    {game.age}
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 18, color: 'white', opacity: 0.7}}>
                    Game of the day
                  </Text>
                </View>
              </View>
              <View style={styles.listImageContainer}>
                <FlatList
                  data={game.preview}
                  keyExtractor={game => game}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{marginLeft: 20, marginRight: 20}}
                  snapToInterval={width - 20}
                  decelerationRate="fast"
                  ItemSeparatorComponent={() => (
                    <View style={{width: 10}}></View>
                  )}
                  renderItem={({item}) => {
                    return (
                      <Image style={styles.imageTag} source={{uri: item}} />
                    );
                  }}
                />
              </View>
              <View style={styles.descriptContainer}>
                <Text style={styles.descriptStyle}>{game.description}</Text>
              </View>
            </View>
          </>
        )}
      </BackgroundView>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameDetail: state.GameReducer.gameDetail,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setGameDetail: id => dispatch(getSetGameDetailSuccess(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);

const styles = StyleSheet.create({
  containerTop: {flex: 2},
  containerBottom: {flex: 3},
  imageBanner: {
    width,
    height: '100%',
    borderRadius: 40,
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContent: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  infoItem: {
    flexDirection: 'column',
    width: '60%',
    marginLeft: 15,
  },
  itemTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  itemSubTitle: {
    opacity: 0.7,
    fontSize: 15,
    color: 'white',
  },
  borderIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
  listImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imageTag: {
    width: width - 50,
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 20,
    marginRight: 20,
  },
  descriptContainer: {
    marginTop: 15,
    overflow: 'hidden',
    width: '95%',
    marginLeft: 10,
    marginRight: 10,
  },
  descriptStyle: {
    fontSize: 14,
    color: 'white',
    opacity: 0.5,
  },
});
