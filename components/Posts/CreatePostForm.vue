<template>
  <Modal modalTitle="Create new post">
    <template v-slot:actionButton>
      <b-button
        v-b-modal.bv-modal-example
        class="button button-a button-big button-rouded"
      >Create new Post</b-button>

    </template>
    <div class="form-comments">
      <form class="form-mf">
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="form-group">
              <input
                id="inputName"
                type="text"
                class="form-control input-mf p-4"
                placeholder="Title *"
                required
              />
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="form-group">
              <input
                id="inputUrl"
                type="text"
                class="form-control input-mf p-4"
                placeholder="Author"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <textarea
                id="textMessage"
                class="form-control input-mf p-4"
                placeholder="Content *"
                name="message"
                cols="45"
                rows="8"
                required
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/modal'
export default {
  name: "CreatePostForm",
  components:{
    Modal
  },
  data: () =>({
    form:{
      title: '',
      author: '',
      content: ''
    }
  })
}
</script>

<style scoped>

</style>
