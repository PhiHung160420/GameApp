import axios from 'axios';
import React, {Component, useEffect} from 'react';
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
import {connect, useDispatch, useSelector} from 'react-redux';
import {getSetGameDataSuccess} from '../../redux/actions/gameAction';
import {callGameAPI} from '../../api/gameAPI';
import {getGamesState} from '../../redux/selectors/gameSelector';
import {changeLoading} from '../../redux/actions/loadingAction';
const {width, height} = Dimensions.get('screen');

const HomeScreen = () => {
  const game = useSelector(getGamesState);
  const isLoading = useSelector(state => state.loadingReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeLoading(true));
    dispatch(getSetGameDataSuccess());
  }, []);

  const renderItem = ({item}) => {
    return <GameItem gameItem={item} />;
  };

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
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 100, paddingTop: 20}}
          ItemSeparatorComponent={() => <View style={{height: 80}}></View>}
        />
      )}
    </BackgroundView>
  );
};

/* const mapDispatchToProps = dispatch => {
  return {
    getGameData: () => dispatch(getSetGameDataSuccess()),
  };
}; */

export default HomeScreen;

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
