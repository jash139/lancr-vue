import { orderBy } from "natural-orderby";

export default {
    isSignedIn: state => {
        return state.signedInStatus;
    },
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
    getProjectsByType: state => type => {
        const allProjects = state.allProjects;
        switch (type) {
            case "none":
                return allProjects;
            case "active":
                return allProjects.filter(project => project.status === "active");
            case "closed":
                return allProjects.filter(project => project.status === "closed");
            case "recent":
                return orderBy(
                    allProjects,
                    [project => project.createdAt],
                    ["asc", "desc"]
                );
            default:
                return allProjects;
                break;
        }
        return
    }
};