import Vue from "vue";
import getDefaultState from "./state";

export default {
    setCurrentUser(state, { user, signedInStatus }) {
        state.currentUser = user;
        state.signedInStatus = signedInStatus;
    },
    setUser(state, user) {
        state.user = user;
    },
    setProject(state, project) {
        state.project = project;
    },
    setAllProjects(state, projects) {
        state.allProjects = projects;
    },
    setAllFreelancers(state, freelancers) {
        state.allFreelancers = freelancers;
    },
    setActiveChatUser(state, user) {
        state.activeChatUser = {
            selected: true,
            user: user,
        };
    },
};