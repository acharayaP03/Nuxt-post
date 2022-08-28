<template>
  <Modal
    modalTitle="Create new post"
    @form:action="createPost"
    :clear-form="resetForm"
  >
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
              <b-form-select v-model="form.category" :options="options" class="p-4">Please select an option</b-form-select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="form-group">
              <input
                id="inputName"
                v-model="form.title"
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
                v-model="form.author"
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
                v-model="form.content"
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
        {{ form }}
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
  data(){
    return{
      options:[
        {value: '', text:'Please Choose one of the category'},
        {value: 'webdesign', text: 'Web Design'},
        {value: 'travel', text: 'travel'},
        {value: 'politics', text: 'Politics'}
      ],
      form:{
        title: '',
        author: '',
        content: '',
        category: ''
      }
    }
// {
//   _id: 'lkdsfkadhs234532naskldfh',
//     category: 'Web Design',
//   description:
//   'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
//     title: 'See more ideas about Travel',
//   createdAt: new Date(),
//   authorDetail: [
//   {
//     name: 'Prabhakar Ac',
//     avatar: 'testimonial-2.jpg',
//   },
// ],
//   blogCover: [
//   {
//     imageUrl: 'post-3.jpg',
//     altDescp: 'Web design cover pic',
//   },
// ],
//   isRead: false,
// },
  },
  methods:{
    createPost({ closeModal}){
      // this.$store.dispatch('posts/createPost', { ...this.form})
      console.log(this.form);
      closeModal()
      this.resetForm()
    },
    resetForm(){
      this.form.category = null
      this.form.title = '';
      this.form.content = '';
      this.from.author = ''
    }
  }
}
</script>

<style scoped>

</style>
