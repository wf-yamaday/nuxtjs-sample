<template>
    <section class="ui container">
        <br>
        <h1 class="ui header">犬種リスト</h1>
        <table class="ui teal table">
            <thead>
                <tr><th>index</th>
                <th>犬種</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(item,i, index) in breed_list" v-bind:key='i'>
                    <td>{{ index+1 }}</td>
                    <td><nuxt-link :to="{path: 'dogs/' + i }">{{ i }}</nuxt-link></td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
    import dogApi from '@/api/dog';
    import {mapState} from 'vuex';

    export default {
        async fetch({store}) {
            let json = await dogApi.breeds();
            store.commit('breed_list_update', json)
        },
        computed: mapState(['breed_list'])
    }
</script>