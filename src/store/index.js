import { createStore } from 'vuex';

export default createStore({
  state: {
    user: [
      {
        userId : 1,
        name:'jimmy',
        pfpic:'../assets/jimmypic.jpg',
        statusMessage:'Life is Good!',
        Latitude:25.0375,
        Longitude:121.5637
      }
    ],
    currentUserId:''
  },
  mutations: {
    ADDUSERDATA(state,userData){
        state.user.push(userData)
        state.currentUserId = userData.userId
    },
    ADDCURRENTUSERID(state,userId){
      
    }
    
  },
  actions: {
    addUserData(state,userData) {
        state.commit('ADDUSERDATA',userData)
      },
    addCurrentUserId(state,userId){
      statusbar.commit('ADDCURRENTUSERID',userId)
    }
  },
  getters: {
     currentUserdata: (state) => {
      return state.user.find(user => user.userId === state.currentUserId);
    }
  }
});
