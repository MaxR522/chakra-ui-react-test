const disconnectAccount = () => {
  // remove token and currentUser inside localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  // redirect to home page after
  window.location.href = '/';
};

export default disconnectAccount;
