let loggedUser = localStorage.getItem("loggedUser") ? JSON.parse(localStorage.getItem("loggedUser")) : null;

const setLoggedUser = (newLoggedUser) => {
  loggedUser = newLoggedUser;
  localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
}

const getLoggedUser = () => {
  return loggedUser;
}

const logout = () => {
  loggedUser = null;
  localStorage.clear();
}

export default {
  setLoggedUser,
  getLoggedUser,
  logout
};