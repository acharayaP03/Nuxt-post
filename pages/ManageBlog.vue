<template>
  <div>
    <NavBar />
    <HeroContainer />

    <main id="main">
      <!-- ======= Blog Single Section ======= -->
      <section class="blog-wrapper sect-pt4" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
                <SearchBar />
            </div>
                <div class="col-md-4 ml-auto">
                    <div class="widget-sidebar sidebar-search">
                        <div class="sidebar-content">
                            <div class="row">
                                <div class="col-md-12">
                                  <Modal modal-title="Create new post ">
                                    <template v-slot:actionButton>
                                      <b-button
                                        v-b-modal.bv-modal-example
                                        class="button button-a button-big button-rouded"
                                      >Create new Post</b-button>
                                    </template>
                                    <CreatePostForm />.
                                  </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <div class="row">
            <div class="col-md-12">
              <div class="box-comments">
                <div class="title-box-2">
                  <h4 class="title-comments title-left">List of blogs</h4>
                </div>
                <ul class="list-comments">
                    <ListItem
                        v-for="post in posts"
                        :key="post._id"
                        :author-detail="post.authorDetail"
                        :post-title="post.postTitle"
                        :description="post.description"
                    />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Blog Single Section -->
    </main>
    <!-- End #main -->
    <FooterComponent />

  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HeroContainer from '~/components/HeroContainer.vue'
import SearchBar from '~/components/SearchBar.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import ListItem from '~/components/Posts/ListItem.vue';
import Modal from "~/components/modal";
import CreatePostForm from "~/components/Posts/CreatePostForm";
export default {
  name: 'IndexPage',
  components: {CreatePostForm, NavBar, HeroContainer, SearchBar, FooterComponent, ListItem, Modal },
  data() {
    return {
      title: 'Here are the list of posts that are recently added.',
      postsData: [],
      showModal: false
    }
  },
  fetch({ store}) {
    if(store.getters["posts/postsIsEmpty"]) {
      return store.dispatch('posts/fetchPosts');
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  methods:{
    toggleModal(){
      this.showModal = true;
    }
  }
}
</script>
<style scoped>
.showmodal{
  display: block;
}
</style>
