export const isLoggedIn = () => {
  const authToken = localStorage.getItem('auth_token');
  console.log('token--> ', authToken);
  return authToken ? true : false;
};
