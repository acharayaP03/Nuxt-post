<template>
  <div>
    <NavBar />
    <!-- ======= Header ======= -->

    <HeroContainer />

    <main id="main">
      <!-- ======= Blog Single Section ======= -->
      <section id="blog" class="blog-wrapper sect-pt4">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <PostContents />
              <PostComments />
              <CommentForm />
            </div>
            <div class="col-md-4">
              <SearchBar />
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

    <!-- ======= Footer ======= -->
    <FooterComponent />
    <!-- End  Footer -->
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HeroContainer from '~/components/HeroContainer.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import PostComments from '~/components/Posts/PostComments.vue'
import CommentForm from '~/components/Posts/CommentForm.vue'
import SearchBar from '~/components/SearchBar.vue'
import RecentPosts from '~/components/Posts/RecentPosts.vue'
import ArchivedPosts from '~/components/Posts/ArchivedPosts.vue'
import PostsTags from '~/components/Posts/PostsTags.vue'
import PostContents from '~/components/Posts/PostContents.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, HeroContainer, FooterComponent, PostComments, CommentForm, SearchBar, RecentPosts, ArchivedPosts, PostsTags, PostContents },
}
</script>
