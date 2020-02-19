import { IRootState } from '../store';

const INITITIALSTATE = {
  isLoggedIn: false,
  userName: undefined,
  anyOtherVariable: undefined,
  people: []
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
    setPeople(state, people) {
      return {
        ...state,
      people
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
    },
    async loadPeopleAsync(dummy, state: IRootState) {
      try {
        try {
          const fetchP = await fetch("https://swapi.co/api/people/");
          const res = await fetchP.json();
          console.log('res in effect', res)
          this.setPeople(res.results);
        } catch (error) {
          console.log('error', error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  })
};
