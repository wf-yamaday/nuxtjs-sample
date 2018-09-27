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
    </section>
</template>

<script>
    import dogApi from '@/api/dog';
    import { mapState } from 'vuex';

    export default {
        async fetch({store, params}){
            const json = await dogApi.dogs(params.breed);
            store.commit('dog_list_update',json)
    },
    computed: mapState(['dog_list']),
    }
</script>