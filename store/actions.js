export default {
    fetchUser({ commit }, uid) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/users/' + uid)
                .then(res => {
                    commit('setCurrentUser', res.data)
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
};