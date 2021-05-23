import { userStructure, projectStructure } from "./defaultStructures";

export default function () {
    return {
        signedInStatus: false,
        notificationMessage: "",
        currentUser: userStructure,
        user: userStructure,
        activeChatUser: {
            selected: false,
            user: userStructure
        },
        project: projectStructure,
        allProjects: [],
        allFreelancers: []
    };
};