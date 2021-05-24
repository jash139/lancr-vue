export default {
    setCurrentUser(state, { user, signedInStatus }) {
        state.currentUser = user;
        state.signedInStatus = signedInStatus;
    },
    setCurrentUserProjects(state, projects) {
        state.currentUserProjects = projects;
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
    setNotificationMessage(state, message) {
        state.notificationMessage = message;
    },
};