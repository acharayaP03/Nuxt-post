<template>
    <div class="row">
        <div class="col-md-4">
            <div class="card card-blog">
                <div class="card-img">
                    <a href="blog-single.html"><img src="~/assets/img/post-1.jpg" alt="" class="img-fluid"></a>
                </div>
                <div class="card-body">
                    <div class="card-category-box">
                        <div class="card-category">
                            <h6 class="category">Travel</h6>
                        </div>
                    </div>
                    <h3 class="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                    <p class="card-description">
                        Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa,
                        convallis
                        a pellentesque nec,
                        egestas non nisi.
                    </p>
                </div>
                <div class="card-footer">
                    <div class="post-author">
                        <a href="#">
                            <img src="~/assets/img/testimonial-2.jpg" alt="" class="avatar rounded-circle">
                            <span class="author">Morgan Freeman</span>
                        </a>
                    </div>
                    <div class="post-date">
                        <span class="bi bi-clock"></span> 10 min
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-blog">
                <div class="card-img">
                    <a href="blog-single.html"><img src="~/assets/img/post-2.jpg" alt="" class="img-fluid"></a>
                </div>
                <div class="card-body">
                    <div class="card-category-box">
                        <div class="card-category">
                            <h6 class="category">Web Design</h6>
                        </div>
                    </div>
                    <h3 class="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                    <p class="card-description">
                        Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa,
                        convallis
                        a pellentesque nec,
                        egestas non nisi.
                    </p>
                </div>
                <div class="card-footer">
                    <div class="post-author">
                        <a href="#">
                            <img src="~/assets/img/testimonial-2.jpg" alt="" class="avatar rounded-circle">
                            <span class="author">Morgan Freeman</span>
                        </a>
                    </div>
                    <div class="post-date">
                        <span class="bi bi-clock"></span> 10 min
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-blog">
                <div class="card-img">
                    <a href="blog-single.html"><img src="~/assets/img/post-3.jpg" alt="" class="img-fluid"></a>
                </div>
                <div class="card-body">
                    <div class="card-category-box">
                        <div class="card-category">
                            <h6 class="category">Web Design</h6>
                        </div>
                    </div>
                    <h3 class="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                    <p class="card-description">
                        Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa,
                        convallis
                        a pellentesque nec,
                        egestas non nisi.
                    </p>
                </div>
                <div class="card-footer">
                    <div class="post-author">
                        <a href="#">
                            <img src="~/assets/img/testimonial-2.jpg" alt="" class="avatar rounded-circle">
                            <span class="author">Morgan Freeman</span>
                        </a>
                    </div>
                    <div class="post-date">
                        <span class="bi bi-clock"></span> 10 min
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Post"
}
</script>
<style lang="scss" scoped>
/*--------------------------------------------------------------
    # Blog
    --------------------------------------------------------------*/
@media (min-width: 767px) {
    .card-blog {
        margin-bottom: 3rem;
    }
}

.card-blog {
    .card-body {
        position: relative;
    }

    .card-category-box {
        position: absolute;
        text-align: center;
        top: -16px;
        left: 15px;
        right: 15px;
        line-height: 25px;
        overflow: hidden;
    }

    .card-category {
        display: inline-block;
        color: #fff;
        padding: 0 15px 5px;
        overflow: hidden;
        background-color: #0078ff;
        border-radius: 4px;

        .category {
            color: #fff;
            display: inline-block;
            text-transform: uppercase;
            font-size: 0.7rem;
            letter-spacing: 0.1px;
            margin-bottom: 0;
        }
    }
    .card-title {
        font-size: 1.3rem;
        margin-top: 0.6rem;
    }

    .card-description {
        color: #4e4e4e;
    }

    .post-author {
        display: inline-block;
    }
    .post-date {
        color: #4e4e4e;
        display: inline-block;
        float: right;
    }

}
</style>