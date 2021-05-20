import Vue from "vue";
import getDefaultState from "./state";

export default {
    setCurrentUser(state, user) {
        state.currentUser = user;
    },
    setAllProjects(state, projects) {
        state.allProjects = projects;
    }
};