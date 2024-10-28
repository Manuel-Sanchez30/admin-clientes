<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    to:{
        type: String
    }
})

</script>
<template>
    <RouterLink
        :to="{name: to}"
        class="bg-indigo-600 text-white font-semibold p-2 rounded-md hover:bg-indigo-500 block md:inline-block py-2 px-3 mt-16"
    >
        <slot></slot>
    </RouterLink>
</template>



