<script setup>
import CommentPart from '@/components/CommentPart.vue';
import PhotoWall from '@/components/PhotoWall.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {
    NGrid, NGridItem, NDescriptions,
    NDescriptionsItem, NImage, NBreadcrumb, NBreadcrumbItem
} from 'naive-ui';

const details = ref(null);
const route = useRoute();
const router = useRouter();


onMounted(() => {
    axios.get(`/${route.params.vid}`)
        .then(result => {
            details.value = result.data.data
        })
        .catch(err => {
            console.log(err)
        })
})

</script>

<template>
    <div v-if="details">
        <n-breadcrumb>
            <n-breadcrumb-item @click="router.push({ name: 'gallery' })">
                gallery</n-breadcrumb-item>
            <n-breadcrumb-item>
                {{ details.name }}</n-breadcrumb-item>

        </n-breadcrumb>
        <n-grid cols="4" item-responsive>
            <n-grid-item span="0 400:1 600:2 800:3">
                <ul>
                    <n-image width="100%" :src="details.picture" :alt="details.name" />
                    <n-descriptions title="Details" :column="3">
                        <n-descriptions-item v-for="(value, key) in details"
                            :label="key != 'picture' && key != 'id' ? key : null">
                            <li v-if="key != 'picture' && key != 'id'">
                                {{ value }}
                            </li>
                        </n-descriptions-item>
                    </n-descriptions>
                </ul>

            </n-grid-item>
            <n-grid-item>
                <CommentPart :vid="details.id" />
            </n-grid-item>
            <n-grid-item>
                <PhotoWall :vid="details.id" />
            </n-grid-item>
        </n-grid>
    </div>
</template>

<style scoped>
.parrel {
    place-items: flex-wrap;
}


.comment {
    place-self: "start";
}
</style>

出现问题，details在 template调用之前还未获取到，如何使details和模板同步