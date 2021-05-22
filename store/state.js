// Default user structure as specified in database schema

const userStructure = {
    uid: "",
    name: "",
    title: "",
    profilePicture: "",
    about: "",
    dateOfBirth: "",
    rating: "",
    experience: [
        {
            organization: "",
            role: "",
            start: "",
            end: ""
        }
    ],
    contact: {
        phone: "",
        location: { country: "", state: "", city: "" },
        email: ""
    },
    connections: [],
    projects: [],
    skills: [],
    languages: []
};

// Default project structure as specified in database schema

const projectStructure = {
    uid: "",
    title: "",
    description: "",
    status: "",
    requirements: [],
    offeredAmount: {
        currencyType: "",
        start: "",
        end: ""
    },
    timePeriod: {
        start: "",
        end: ""
    },
    location: {
        country: "",
        state: "",
        city: ""
    },
    applicants: []
};

export default function () {
    return {
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