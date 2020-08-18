import axios from 'axios';

export let setToken = async token => {
  axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    'AUTH-TOKEN': token,
  };
};

export let unsetToken = async () => {
  axios.defaults.headers.common['AUTH-TOKEN'] = null;

  localStorage.clear();
};
