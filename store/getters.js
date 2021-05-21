export default {
    getCurrentUser: state => {
        return state.currentUser;
    },
    getProject: state => {
        return state.project;
    },
    getAllProjects: state => {
        return state.allProjects;
    },
    getAllFreelancers: state => {
        return state.allFreelancers;
    }
};