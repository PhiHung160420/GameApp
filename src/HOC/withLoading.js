import React from 'react';
import BackgroundView from '../components';

const withLoading = Component => () => {
  const isLoading = useSelector(state => state.loadingReducer.isLoading);
  if (isLoading) {
    return (
      <BackgroundView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff'}}>Loading...</Text>
      </BackgroundView>
    );
  }
  return <Component {...props} />;
};

export default withLoading;
