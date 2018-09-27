import axios from 'axios'

//apiからアルバム情報を取得する
class AlbumApi {
    constructor() {
        this.apiBase = 'http://localhost:8080/api';
    }

    albums() {
        return axios.get(`${this.apiBase}/albums`)
            .then(json => {
                return json.data._embedded.albums;
            })
            .catch(e => ( {error: e }));
    }
}

const albumApi = new AlbumApi();

export default albumApi;