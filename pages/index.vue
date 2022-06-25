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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
    <!-- End  Footer -->
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import PostItem from '~/components/Posts/PostItem.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, PostItem },
  data() {
    return {
      postsData: [
        {
          _id: 'lkdsfkadhs234532naskldfh',
          category: 'Web Design',
          description:
            'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
          title: 'See more ideas about Travel',
          createdAt: new Date(),
          authorDetail: [
            {
              name: 'Prabhakar Ac',
              avatar: 'testimonial-2.jpg',
            },
          ],
          blogCover: [
            {
              imageUrl: 'post-3.jpg',
              altDescp: 'Web design cover pic',
            },
          ],
          isRead: false,
        },
        {
          _id: 'adgfjdgbrewh532nafh',
          category: 'Web Design',
          description:
            'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
          title: 'See more ideas about Travel',
          createdAt: new Date(),
          authorDetail: [
            {
              name: 'Trishten Ac',
              avatar: 'testimonial-2.jpg',
            },
          ],
          blogCover: [
            {
              imageUrl: 'post-2.jpg',
              altDescp: 'Web design cover pic',
            },
          ],
          idRead: false,
        },
        {
          _id: 'adgfjdgbrewhs234532nh',
          category: 'Travel',
          description:
            'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
          title: 'See more ideas about Travel',
          createdAt: new Date(),
          authorDetail: [
            {
              name: 'Lily Vaidya (Ac)',
              avatar: 'testimonial-4.jpg',
            },
          ],
          blogCover: [
            {
              imageUrl: 'post-1.jpg',
              altDescp: 'Web design cover pic',
            },
          ],
          isRead: true,
        },
      ],
    }
  },
}
</script>
