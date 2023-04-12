<template>
    <div>
        <Header title="coffee" />

        <h1>coffee</h1>

        <ul v-infinite-scroll="load" class="infinite-list override" style="overflow: auto">
            <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
        </ul>
    </div>
</template>
<script>
import Header from '../components/Header.vue'

export default {
    components: {
        Header
    },
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        load() {
            this.count += 2
        }
    }
}
</script>
<style>
.infinite-list {
    height: 600px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    margin: 10px;
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}
</style>