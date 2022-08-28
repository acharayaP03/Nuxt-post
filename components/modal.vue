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
      <b-button class="button button-a button-small"  @click="resetForm">Submit</b-button>
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
    },
    clearForm:{
      type: Function,
      default() {
        return 'Default function'
      }
    }
  },
  methods:{
    resetForm() {
      this.$emit('form:action',{ closeModal: this.$bvModal.hide('bv-modal-example')})
      this.clearForm()
    }
  }
}
</script>

<style scoped>
</style>
