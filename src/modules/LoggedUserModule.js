export default class LoggedUserModule {
  constructor() {
    this.loggedUser = localStorage.getItem("loggedUser") ? JSON.parse(localStorage.getItem("loggedUser")) : null;
  }

  loggedUser = null;

  setLoggedUser = (loggedUser) => {
    this.loggedUser = loggedUser;
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
  }

  getLoggedUser = () => {
    return this.loggedUser;
  }

  logout = () => {
    this.loggedUser = null;
    localStorage.removeItem("loggedUser");
  }
}

