import { orderBy } from "natural-orderby";

export default {
    isSignedIn: state => {
        return state.signedInStatus;
    },
    getCurrentUser: state => {
        return state.currentUser;
    },
    getCurrentUserProjects: state => {
        return state.currentUserProjects;
    },
    getCurrentUserConnections: state => connectionIds => {
        const allFreelancers = state.allFreelancers;
        let connections = [];
        allFreelancers.forEach(freelancer => {
            if (connectionIds.includes(freelancer.uid)) {
                connections.push(freelancer);
            }
        });
        return connections;
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
        const statusType = type.toLowerCase();
        const allProjects = state.allProjects;
        switch (statusType) {
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
                    ["desc", "asc"]
                );
            default:
                return allProjects;
                break;
        }
        return
    },
    getProjectsByUID: state => uid => {
        return state.allProjects.filter(project => project.uid === uid);
    },
    getUserConnections: state => connectionIds => {
        const allFreelancers = state.allFreelancers;
        let connections = [];
        allFreelancers.forEach(freelancer => {
            if (connectionIds.includes(freelancer.uid)) {
                connections.push(freelancer);
            }
        });
        return connections;
    }
};