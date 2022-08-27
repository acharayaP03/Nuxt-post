<template><!-- Modal -->
  <div>
    <b-button
      v-b-modal.bv-modal-example
      class="button button-a button-big button-rouded"
    >{{ buttonName}}</b-button>
    <b-modal id="bv-modal-example" size="xl" centered hide-footer>
      <template #modal-title>
        {{ modalTitle }}
      </template>
      <div class="d-block text-center">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate distinctio laboriosam nisi quia quibusdam repellendus sit tenetur vitae voluptate?</p>
      </div>
      <hr class="mt-4">
      <b-button class="button button-a button-small"  @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "CreateBlogModal",
  data(){
    return{
      isActive: false
    }
  },
  props:{
    buttonName: {
      type: String,
      default: ''
    },
    modalTitle:{
      type: String,
      default: ''
    }
  },
  methods:{
    toggleModal() {
      this.isActive = true;
    }
  }
}
</script>

<style scoped>
</style>
