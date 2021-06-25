import React, {Component, useEffect} from 'react';
import axios from 'axios';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import {Alto_0, Avatar} from '../../assets/index';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import globalStyle from '../../theme/globalStyle';
import {connect, useSelector} from 'react-redux';
import {getSetGameDataSuccess} from '../../redux/actions/gameAction';

const CyberScreen = () => {
  const game = useSelector(state => state.GameReducer.games);

  const renderItem = ({item}) => (
    <View style={styles.listStyle}>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <Image source={{uri: item.icon}} style={styles.imageItem} />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={{color: '#fff', opacity: 0.5}}>825 sales</Text>
        </View>
      </View>
      <View style={{marginRight: 10, justifyContent: 'center'}}>
        <Text style={styles.itemPrice}>$36</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.headerStyle}>
          <View style={styles.avatarContainer}>
            <Image source={Avatar} style={styles.avatar} />
          </View>
          <Text style={{color: 'white', fontWeight: '500', marginTop: 10}}>
            Cyber Sort
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#6495ed',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 15,
              }}>
              <Text style={{color: 'white', fontWeight: '500'}}>Pro Gamer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffa500',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 15,
                marginLeft: 10,
              }}>
              <Text style={{fontWeight: '500'}}>Pro Coder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.containerMiddle}>
        <View style={styles.statisStyle}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', marginRight: 20}}>
              <Text style={styles.numberStatis}>250</Text>
              <Text style={[styles.textStatis, globalStyle.textColor]}>
                Games
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.numberStatis}>4</Text>
              <Text style={[styles.textStatis, globalStyle.textColor]}>
                Purchases
              </Text>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.titleList}>Purchased Games</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <FlatList
          data={game}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
        />
      </View>
    </SafeAreaView>
  );
};

/* const mapStateToProps = state => {
  return {
    game: state.GameReducer.games,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setGameData: () => dispatch(getSetGameDataSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CyberScreen); */

export default CyberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
  },
  containerTop: {
    flex: 2,
  },
  containerMiddle: {
    flex: 1,
  },
  containerBottom: {
    flex: 4,
  },
  headerStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statisStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  listStyle: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    marginTop: 40,
  },
  numberStatis: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textStatis: {
    marginTop: 10,
    marginLeft: 5,
    opacity: 0.5,
  },
  titleList: {
    color: '#fff',
    fontSize: 20,
    opacity: 0.7,
  },
  imageItem: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  itemTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemPrice: {
    color: '#6495ed',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
