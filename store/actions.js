export default {
    fetchUser({ commit }, uid) {
        return new Promise((resolve, reject) => {
            this.$axios.get("/users/" + uid)
                .then(res => {
                    commit("setCurrentUser", res.data)
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
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
        })
    },
};