<template><!-- Modal -->
  <div>
    <div>
      <slot name="actionButton">
        <button class="btn btn-primary">Button text</button>
      </slot>
    </div>
    <b-modal id="bv-modal-example" size="xl" centered hide-footer>
      <template #modal-title>
        {{ modalTitle }}
      </template>
      <div class="d-block text-center">
        <slot/>
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
