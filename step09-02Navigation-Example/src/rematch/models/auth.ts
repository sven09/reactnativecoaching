import { IRootState } from "../store";

export const auth = {
  state: {
    isLoggedIn: false
  },
  reducers: {
    setLogin(state, isLoggedIn) {
      return {
        ...state,
        isLoggedIn
      };
    },
    clear(state) {
      return {
        isLoggedIn: false
      };
    }
  },
  effects: dispatch => ({
    async loginAsync(payload, state: IRootState) {
      try {
        setTimeout(() => {
          this.setLogin(true);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    },
    async logoutAsync(payload, state: IRootState) {
      try {
        this.setLogin(false);
      } catch (error) {
        console.log(error);
      }
    }
  })
};
