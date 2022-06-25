<template>
  <div>
    <NavBar />
    <div
      class="hero hero-single route bg-image"
      style="background-image: url(assets/img/overlay-bg.jpg)"
    >
      <div class="overlay-mf"></div>
      <div class="hero-content display-table">
        <div class="table-cell">
          <div class="container">
            <h2 class="hero-title mb-4">Blog Details</h2>
            <ol class="breadcrumb d-flex justify-content-center">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li class="breadcrumb-item active">Data</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <main id="main">
      <!-- ======= Blog Single Section ======= -->
      <section class="blog-wrapper sect-pt4" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="widget-sidebar sidebar-search">
                <h5 class="sidebar-title">Search</h5>
                <div class="sidebar-content">
                  <form>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search for..."
                        aria-label="Search for..."
                      />
                      <span class="input-group-btn">
                        <button
                          class="btn btn-secondary btn-search"
                          type="button"
                        >
                          <span class="bi bi-search"></span>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
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
              <div class="widget-sidebar">
                <h5 class="sidebar-title">Recent Post</h5>
                <div class="sidebar-content">
                  <ul class="list-sidebar">
                    <li>
                      <a href="#">Atque placeat maiores.</a>
                    </li>
                    <li>
                      <a href="#">Lorem ipsum dolor sit amet consectetur</a>
                    </li>
                    <li>
                      <a href="#">Nam quo autem exercitationem.</a>
                    </li>
                    <li>
                      <a href="#">Atque placeat maiores nam quo autem</a>
                    </li>
                    <li>
                      <a href="#">Nam quo autem exercitationem.</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="widget-sidebar">
                <h5 class="sidebar-title">Archives</h5>
                <div class="sidebar-content">
                  <ul class="list-sidebar">
                    <li>
                      <a href="#">September, 2017.</a>
                    </li>
                    <li>
                      <a href="#">April, 2017.</a>
                    </li>
                    <li>
                      <a href="#">Nam quo autem exercitationem.</a>
                    </li>
                    <li>
                      <a href="#">Atque placeat maiores nam quo autem</a>
                    </li>
                    <li>
                      <a href="#">Nam quo autem exercitationem.</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="widget-sidebar widget-tags">
                <h5 class="sidebar-title">Tags</h5>
                <div class="sidebar-content">
                  <ul>
                    <li>
                      <a href="#">Web.</a>
                    </li>
                    <li>
                      <a href="#">Design.</a>
                    </li>
                    <li>
                      <a href="#">Travel.</a>
                    </li>
                    <li>
                      <a href="#">Photoshop</a>
                    </li>
                    <li>
                      <a href="#">Corel Draw</a>
                    </li>
                    <li>
                      <a href="#">JavaScript</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Blog Single Section -->
    </main>
    <!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="copyright-box">
              <p class="copyright">
                &copy; Copyright <strong>DevFolio</strong>. All Rights Reserved
              </p>
              <div class="credits">
                <!--
                        All the links in the footer should remain intact.
                        You can delete the links only if you purchased the pro version.
                        Licensing information: https://bootstrapmade.com/license/
                        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
                        -->
                Designed by
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'IndexPage',
  components: { NavBar },
  data() {
    return {
      title: 'Here are the list of posts that are recently added.',
      postsData: this.$store.state.posts,
    }
  },
}
</script>
