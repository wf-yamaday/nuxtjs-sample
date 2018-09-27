<template>
    <section class="ui container">
        <br>
        <h1 class="ui header">アルバムリスト</h1>
        <table class="ui teal table">
            <thead>
                <tr><th>index</th>
                <th>アルバム名</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(album, index) in album_list">
                    <td>#{{index}}</td>
                    <td><nuxt-link :to="{path: 'dogs/' + index }">{{ album.albumName }}</nuxt-link></td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
    import albumApi from '@/api/album';
    import {mapState} from 'vuex';

    export default {
        async fetch({store}) {
            let json = await albumApi.albums();
            store.commit('album_list_update', json)
        },
        computed: mapState(['album_list'])
    }
</script>