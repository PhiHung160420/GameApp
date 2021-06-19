import React, {Component} from 'react';
import axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BackgroundView} from '../../components/index';
import {connect} from 'react-redux';
import {getSetGameDataSuccess} from '../../redux/actions/gameAction';

const {width, height} = Dimensions.get('screen');

class StreamingScreen extends Component {
  componentDidMount() {
    this.props.setGameData();
  }

  render() {
    const {game} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          Streaming
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textStyle}
            placeholder="  Search here"
            placeholderTextColor="white"></TextInput>
          <TouchableOpacity style={{position: 'absolute', right: 40, top: 30}}>
            <Ionicons
              name="ios-search"
              size={30}
              color="white"
              style={{opacity: 0.5}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 30,
            fontSize: 18,
            color: 'white',
            opacity: 0.7,
            marginBottom: 10,
          }}>
          Popular game
        </Text>
        <View>
          {!!game.length && (
            <FlatList
              data={game}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{marginLeft: 20, marginRight: 20}}
              key={item => item.id}
              renderItem={({item}) => {
                return (
                  <Image style={styles.imgPopular} source={{uri: item.icon}} />
                );
              }}
            />
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
            Live game
          </Text>
          <Text style={{color: '#87cefa', fontSize: 17}}>View all</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <FlatList
            data={game}
            keyExtractor={item => item.id}
            contentContainerStyle={{paddingBottom: 300}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <>
                  <Image
                    source={{uri: item.preview[0]}}
                    style={styles.imgLiveGame}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      right: 10,
                      top: 10,
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#6495ed',
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                      }}>
                      <Text>{item.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#ff6347',
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                        marginLeft: 5,
                      }}>
                      <Text>Live</Text>
                    </TouchableOpacity>
                  </View>
                </>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.GameReducer.games);
  return {
    game: state.GameReducer.games,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setGameData: () => dispatch(getSetGameDataSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 20,
    backgroundColor: 'gray',
    width: width - 50,
    height: 50,
    borderRadius: 20,
  },
  imgPopular: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 20,
  },
  imgLiveGame: {
    width: width - 20,
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 10,
    marginBottom: 15,
  },
});
