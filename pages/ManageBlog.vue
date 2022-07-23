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
            <div class="col-md-4">
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
            <div class="col-md-8">
              <div class="box-comments">
                <div class="title-box-2">
                  <h4 class="title-comments title-left">List of blogs</h4>
                </div>
                <ul class="list-comments">
                  <li v-for="(post) in postsData" :key="post._id">
                    <div    
                        v-for="(image, i) in post.authorDetail"
                        :key="i"
                        class="comment-avatar"
                    >
                      <img 
                        :src="require(`~/assets/img/${image.avatar}`)"
                        :alt="image.author"
                        />
                    </div>
                    <div class="comment-details">
                      <h4 class="comment-author">{{ post.title }}</h4>
                      <span>{{ new Date() | formateDate }}</span>
                      <p>
                        {{ post.description }}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
                <RecentPosts />
                <ArchivedPosts />
                <PostsTags />
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
import RecentPosts from '~/components/Posts/RecentPosts.vue'
import ArchivedPosts from '~/components/Posts/ArchivedPosts.vue'
import PostsTags from '~/components/Posts/PostsTags.vue'
import FooterComponent from '~/components/FooterComponent.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, HeroContainer, SearchBar, RecentPosts, ArchivedPosts, PostsTags, FooterComponent },
  data() {
    return {
      title: 'Here are the list of posts that are recently added.',
      postsData: this.$store.state.posts,
    }
  },
}
</script>
