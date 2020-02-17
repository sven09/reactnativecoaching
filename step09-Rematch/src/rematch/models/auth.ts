import { IRootState } from '../store';

const INITITIALSTATE = {
  isLoggedIn: undefined,
  userName: undefined
};
export const auth = {
  state: INITITIALSTATE,
  reducers: {
    setLoginName(state, userName) {
      return {
        ...state,
        isLoggedIn: true,
        userName
      };
    },
    logout(state) {
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined
      };
    },
    clear(state) {
      return INITITIALSTATE;
    }
  },
  effects: dispatch => ({
    async loginAsync(email, state: IRootState) {
      try {
        // Here comes some fancy async remote stuff
        this.setLoginName('Sven');
      } catch (error) {
        console.log(error);
      }
    },
    async logoutAsync(email, state: IRootState) {
      try {
        // Here comes some fancy async remote stuff
        this.logout();
      } catch (error) {
        console.log(error);
      }
    }
  })
};
