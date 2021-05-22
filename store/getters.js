export default {
    getCurrentUser: state => {
        return state.currentUser;
    },
    getUser: state => {
        return state.user;
    },
    getProject: state => {
        return state.project;
    },
    getAllProjects: state => {
        return state.allProjects;
    },
    getAllFreelancers: state => {
        return state.allFreelancers;
    },
    getActiveChatUser: state => {
        return state.activeChatUser;
    },
};