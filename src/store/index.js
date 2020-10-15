import Vue from "vue";
import Vuex from "vuex";
import firebase, { firestore } from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    actividades: [],
  },
  mutations: {
    GET_ACTIVITIES(state, actividades) {
      state.actividades = actividades;
    },
  },
  actions: {
    setActivity({ commit }, activity) {
      firebase
        .firestore()
        .collection("actividades")
        .add(activity);
    },

    getActivities({ commit }) {
      firebase
        .firestore()
        .collection("actividades")
        .onSnapshot((querySnapShot) => {
          let actividades = [];
          querySnapShot.forEach((doc) => {
            actividades.push({
              id: doc.id,
              data: doc.data(),
            });
          });

          commit("GET_ACTIVITIES", actividades);
        });
    },

    deleteActivity({ commit }, id) {
      firebase
        .firestore()
        .collection("actividades")
        .doc(id)
        .delete();
    },

    updatingActivity({ commit }, newActivity) {
      firebase
        .firestore()
        .collection("actividades")
        .doc(newActivity.id)
        .update(newActivity.data);
    },
  },
  modules: {},
});
