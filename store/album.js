import Vuex from 'vuex'

const albumStore = () => {
    return new Vuex.Store({
        state: {
            album_list: {},
        },
        mutations: {
            album_list_update(state, payload) {
                state.album_list = {...payload}
            },
        }
    })
};

export default albumStore;
