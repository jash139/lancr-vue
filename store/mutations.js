import Vue from "vue";
import getDefaultState from "./state";

export default {
    setCurrentUser(state, user) {
        state.currentUser = user;
    },
    setProject(state, project) {
        state.project = project;
    },
    setAllProjects(state, projects) {
        state.allProjects = projects;
    },
    setAllFreelancers(state, freelancers) {
        state.allFreelancers = freelancers;
    }
};