export const CHANGE_LOADING = 'CHANGE_LOADING';

export const changeLoading = payload => {
  return {
    type: CHANGE_LOADING,
    payload,
  };
};
