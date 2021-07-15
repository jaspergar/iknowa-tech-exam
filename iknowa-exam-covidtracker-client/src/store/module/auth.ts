import axios from 'axios'
import { Commit } from 'vuex'

export default{
  namespaced: true,
  state: {
      token: null,
      user: null
  },
  getters: {
     authenticated (state : any) {
       return state.token && state.user
     },

     user (state : any) {
       return state.user
     },

     token (state : any){
       return state.token
     }
  },
  mutations: {
      SET_TOKEN_MUTATION (state : any, token : any) {
          state.token = token
      },

      SET_USER_MUTATION (state : any, data : any) {
        state.user = data
    }
  },
  actions: { // TODO : fix the types
      async signIn ({commit} : any, credentials : any) {
        const res = await axios.post('auth/login' , credentials)
       
        commit('SET_TOKEN_MUTATION', res.data.token);
        // return dispatch('attempt', res.data.token)
      },

      async attempt({ commit }: {commit: Commit}, token : any) {
         commit('SET_TOKEN_MUTATION', token)
        
        //get auth user
        try{
           const response = await axios.get('auth/user' , {
               headers: {
                   'Authorization': 'Bearer ' + token
               }
           })

           commit('SET_USER_MUTATION', response.data)
        } catch (e) {
           commit('SET_TOKEN_MUTATION', null)
           commit('SET_USER_MUTATION', null)
        }
      }
  }
}
function dispatch(arg0: string, token: any) {
  throw new Error('Function not implemented.')
}

