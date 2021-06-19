import axios from 'axios';
import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import GameItem from './GameItem';
import {Avatar} from '../../assets/index';
import globalStyle from '../../theme/globalStyle';
import {BackgroundView} from '../../components/index';
import {connect} from 'react-redux';
import {getSetGameDataSuccess} from '../../redux/actions/gameAction';
import {callGameAPI} from '../../api/gameAPI';

const {width, height} = Dimensions.get('screen');

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getGameData();
  }

  _renderItem = ({item}) => <GameItem gameItem={item} />;

  render() {
    const {game} = this.props;
    return (
      <BackgroundView>
        <View style={styles.headerStyle}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 25, color: 'white', fontWeight: '300'}}>
                  Hello
                </Text>
                <Text> </Text>
                <Text style={{fontSize: 25, fontWeight: '600', color: 'white'}}>
                  CyberSort,
                </Text>
              </View>
              <Text style={{fontSize: 15, fontWeight: '300', color: 'white'}}>
                Best game for today
              </Text>
            </View>
            <View style={styles.backIcon}>
              <Image source={Avatar} style={styles.iconHeader} />
            </View>
          </View>
        </View>
        {!!game.length && (
          <FlatList
            data={game}
            renderItem={this._renderItem}
            contentContainerStyle={{paddingBottom: 100, paddingTop: 20}}
            ItemSeparatorComponent={() => <View style={{height: 80}}></View>}
          />
        )}
      </BackgroundView>
    );
  }
}

const mapStateToProps = state => {
  return {
    game: state.GameReducer.games,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGameData: () => dispatch(getSetGameDataSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
  },
  headerStyle: {
    marginHorizontal: 10,
    marginTop: 50,
  },
  backIcon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconHeader: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  gameBanner: {
    width,
    height: 250,
  },
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    position: 'absolute',
    bottom: -40,
    left: 10,
    right: 10,
  },
  gameIcon: {
    height: 65,
    width: 65,
    borderRadius: 8,
  },
  infoContent: {
    width: '70%',
  },
  textColor: {
    color: 'white',
  },
});
