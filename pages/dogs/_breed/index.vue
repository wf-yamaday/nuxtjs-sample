<template>
    <section class="ui container">
        <br>
        <h1 class="ui header">画像一覧</h1>
        <div class="ui four cards">
        <div v-for="(item, i) in dog_list" v-bind:key="i" class="card">
                <div class="image">
                    <img :src="item.url" >
                </div>
        </div>
        </div>
        <br>
        <div class="ui pagination menu">
                <nuxt-link  v-for="count in page_count" :key="count"  class="item"
                           :class="{ 'active item' : current == count }"
                           :to="{ path: '?page=' + count }">
                    {{ count }}
                </nuxt-link>
        </div>
    </section>
</template>

<script>
    import dogApi from '@/api/dog';
    import { mapState } from 'vuex';

    export default {
        watchQuery: [
            'page'
        ],
        validate ({params}) {
            return /^[a-z]+$/.test( params.breed);
        },
        data: function() {
            return {
                current: 1,
            };
        },
        asyncData: function(context){
            return {
                current: parseInt( context.query['page']) || 1,
            }
        },
        fetch: async function({store, params, query}){
            const page = parseInt(query['page']) || 1;
            const start = 20* (page -1);
            const end = start + 20;

            const json = await dogApi.dogs(params.breed);

            store.commit('page_count_update',Math.ceil(json.length / 20));
            store.commit( 'dog_list_update', json.slice( start,end));
    },
    computed: mapState([
        'page_count',
        'dog_list'
    ]),
    }
</script>