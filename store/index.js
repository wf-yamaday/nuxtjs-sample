import Vuex from 'vuex'

const appStore = () => {
    return new Vuex.Store({
        state: {
            breed_list: {},
            dog_list: {},
            page_count: 1,
            // apiで取得するアルバムリスト
            album_list: {},
        },
        mutations: {
            breed_list_update(state, payload) {
                state.breed_list = {...payload}
            },

            dog_list_update(state, payload) {
                state.dog_list = [...payload]
            },

            page_count_update(state, payload) {
                state.page_count = parseInt( payload );
            },
            // アルバム
            album_list_update(state, payload) {
                state.album_list = {...payload}
            }
        }
    })
};

export default appStore;