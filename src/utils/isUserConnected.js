const isUserConnected = () => {
  return localStorage.getItem('currentUser') !== null;
};

export default isUserConnected;
