import {Platform} from 'react-native';

const mapIP = games => {
  if (Platform.OS === 'android') {
    if (Array.isArray(games)) {
      return games.map(item => {
        const preview = item.preview.map(pItem => {
          pItem.replace('locahost', '10.0.2.2');
        });
        return {
          ...item,
          preview,
          icon: item.icon.replace('localhost', '10.0.2.2'),
        };
      });
    }
    const preview = games.preview.map(item => {
      item.replace('localhost', '10.0.2.2');
    });
    return {
      ...games,
      preview,
      icon: games.icon.replace('localhost', '10.0.2.2'),
    };
  } else {
    return games;
  }
};

export default mapIP;
