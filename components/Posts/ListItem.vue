<template>
    <li class="border-bottom mt-4">
        <AvatarList
            v-for="(image, i) in authorDetail"
            :key="i"
            :avatar="image.avatar"
            :alt-description="image.author"
        />
        <div class="comment-details">
            <h4 class="comment-author">{{ postTitle }}</h4>
            <span>{{ new Date() | formateDate }}</span>
            <p>
            {{ description }}
            </p>
        </div>
    </li>
</template>
<script>
import AvatarList from './AvatarList.vue'
export default {
    name: "ListItems",
    props: {
        authorDetail: {
            type: Array,
            default: () => []
        },
        postTitle: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        }
    },
    data() {
        return {};
    },
    created() {
        console.log(this.authorDetail);
    },
    components: { AvatarList }
}
</script>