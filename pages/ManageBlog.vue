<template>
  <div>
    <NavBar />
    <HeroContainer />

    <main id="main">
      <!-- ======= Blog Single Section ======= -->
      <section class="blog-wrapper sect-pt4" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
                <SearchBar />
            </div>
          </div>
            <div class="row">
                <div class="col-md-4 ml-auto">
                    <div class="widget-sidebar sidebar-search">
                        <div class="sidebar-content">
                            <div class="row">
                                <div class="col-md-12">
                                    <button
                                    type="submit"
                                    class="button button-a button-big button-rouded"
                                    >
                                    Create new blog
                                    </button>
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
import ListItem from '~/components/Posts/ListItem.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, HeroContainer, SearchBar, FooterComponent, ListItem },
  data() {
    return {
      title: 'Here are the list of posts that are recently added.',
      postsData: []
    }
  },
  fetch({ store}) {
    return store.dispatch('posts/fetchPosts');
  },
  computed:{
    posts() {
      return this.$store.state.posts.posts
    }
  }
}
</script>
