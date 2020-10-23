import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const store =new Vuex.Store({
    state:{
        count:1
    },
    getters:{
        getCount(state){
            return state.count
        }
    },
    actions:{
        ceshi({commit},e){
            commit('setCount',e)
        }
    },
    mutations:{
        setCount(state,e){
            state.count=e;
        }
    },
    modules:{

    }
})
export default store;