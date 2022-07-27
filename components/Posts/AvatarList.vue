<template>
    <div    
        class="comment-avatar"
    >
        <img 
            :src="require(`~/assets/img/${avatar}`)"
            :alt="altDescription"
        />
    </div>
</template>
<script>
export default {
    name: 'AvatarList',
    props:{
        avatar: {
            type: String,
            default: ''
        },
        altDescription:{
            type: String,
            default: ''
        }
    }
}
</script>