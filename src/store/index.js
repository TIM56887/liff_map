import { createStore } from 'vuex';

export default createStore({
  state: {
    user: []
  },
  mutations: {
    ADDUSERDATA(state,userData){
        state.user.push(userData)
    }
    
  },
  actions: {
    addUserData(state,userData) {
        state.commit('ADDUSERDATA',userData)
      }
  },
  getters: {
    count: state => state.count
  }
});
