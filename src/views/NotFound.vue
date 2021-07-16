<template>
    <h1>404 - Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'Home' }">Back to the home page</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        resource: {
            type: String,
            require: true,
            default: 'page'
        }
    }
})
</script>

