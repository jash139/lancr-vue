export default {
    fetchCurrentUser({ commit }, uid) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/users/" + uid)
                .then(res => {
                    commit("setCurrentUser", res.data)
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                })
        });
    },
    signUpUserWithEmailAndPassword({ commit }, { email, password }) {
        return new Promise((resolve, reject) => {
            this.$fire.auth.createUserWithEmailAndPassword(email, password)
                .then(data => {
                    console.log(data.user)
                }).catch((error) => {
                    reject(error)
                })
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