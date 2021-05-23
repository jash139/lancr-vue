import { userStructure } from "./defaultStructures";

export default {
    fetchCurrentUser({ commit }, uid) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/users/" + uid)
                .then(res => {
                    commit("setCurrentUser", { user: res.data, signedInStatus: true })
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    },
    signInUserWithEmailAndPassword({ commit }, { email, password }) {
        return new Promise((resolve, reject) => {
            this.$fire.auth.signInWithEmailAndPassword(email, password)
                .then(res => {
                    resolve(res)
                }).catch((error) => {
                    reject(error)
                })
        })
    },
    signUpUserWithEmailAndPassword({ dispatch }, { email, password }) {
        return new Promise((resolve, reject) => {
            this.$fire.auth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                    const user = {
                        uid: res.user.uid,
                        name: res.user.email.substr(0, res.user.email.indexOf('@')),
                        // add total ratings given to calculate new rating                
                    };
                    this.$axios.post("/users/", user)
                        .then(res => {
                            dispatch("fetchCurrentUser", user.uid)
                        })
                        .catch(error => {
                            reject(error)
                        })
                    resolve(res)
                }).catch((error) => {
                    reject(error)
                })
        })
    },
    signOut({ commit }) {
        return this.$fire.auth.signOut()
            .then(() => {
                commit("setCurrentUser", { user: userStructure, signedInStatus: false })
                this.$router.push('/')
            })
    },
    fetchUser({ commit }, uid) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/users/" + uid)
                .then(res => {
                    commit("setUser", res.data)
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    },
    fetchProject({ commit }, id) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/projects/" + id)
                .then(res => {
                    commit("setProject", res.data)
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    },
    fetchAllProjects({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/projects/")
                .then(res => {
                    commit("setAllProjects", res.data)
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    },
    fetchAllFreelancers({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/users/")
                .then(res => {
                    commit("setAllFreelancers", res.data)
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    },
    fetchActiveChatUser({ commit }, uid) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/users/" + uid)
                .then(res => {
                    commit("setActiveChatUser", res.data)
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    }
};