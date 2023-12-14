<template>
    <div class="much-image">
        <img v-for="item in imageUrls" :key="item" :src="item" class="image"/>
    </div>
</template>

<script setup>
const props = defineProps(["imageUrls"]);
const imageUrls = [];
props.imageUrls.forEach((e, i) => {
    imageUrls[i] = require(e);
});
</script>