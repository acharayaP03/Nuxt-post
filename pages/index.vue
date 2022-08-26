<template>
  <div>
    <NavBar />
    <main id="main">
      <!-- ======= Blog Section ======= -->
      <section id="blog" class="blog-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">Blog</h3>
                <p class="subtitle-a">
                  {{title}}
                </p>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>

          <div class="row mb-5">
            <div v-for="post in postsData" :key="post._id" class="col-md-4">
              <PostItem
                :id="post._id"
                :title="post.title"
                :category="post.category"
                :author-detail="post.authorDetail"
                :blog-cover="post.blogCover"
                :is-read="post.isRead"
                :description="post.description"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- End Blog Section -->
    </main>
    <!-- End #main -->

    <!-- ======= Footer ======= -->
  <FooterComponent />
  </div>
</template>

<script>

import NavBar from '~/components/NavBar.vue'
import PostItem from '~/components/Posts/PostItem.vue'
import FooterComponent from '~/components/FooterComponent.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, PostItem, FooterComponent },
  data() {
    return {
      title: 'Here are the list of posts that are recently added.',
      postsData: []
    }
  },
  async mounted() {
    this.postsData = await this.$store.dispatch('fetchPosts')
  }
}
</script>
