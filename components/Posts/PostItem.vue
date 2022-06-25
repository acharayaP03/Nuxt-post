<template>
  <div class="card card-blog">
    <div class="card-img">
      <img
        :src="require(`~/assets/img/${coverImage}`)"
        :alt="coverAltDescp"
        class="img-fluid"
      />
    </div>
    <div class="boxes">
      <input :id="id" type="checkbox" name="cb" :checked="isRead" />
      <label :for="id" class="label"></label>
    </div>
    <div class="card-body">
      <div class="card-category-box">
        <div class="card-category">
          <h6 class="category">{{ category }}</h6>
        </div>
      </div>
      <h3 class="card-title">
        <a href="blog-single.html">{{ title }}</a>
      </h3>
      <p class="card-description">
        {{ description }}
      </p>
    </div>
    <div class="card-footer">
      <div class="post-author">
        <a href="#">
          <img
            :src="require(`~/assets/img/${authorImg}`)"
            :alt="author"
            class="avatar rounded-circle"
          />
          <span class="author">{{ author[0] }}</span>
        </a>
      </div>
      <div class="post-date">
        <span class="bi bi-clock"></span> {{ new Date() | formateDate }}
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'PostItem',
  props: {
    id:{
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Title for Card',
    },
    category: {
      type: String,
      default: 'Post category',
    },
    description: {
      type: String,
      default: 'Post description',
    },
    authorDetail: {
      type: Array,
      default: () => [],
    },
    blogCover: {
      type: Array,
      default: () => [],
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      moment,
    }
  },
  computed: {
    coverImage: {
      get() {
        return this.blogCover.map((el) => el.imageUrl)
      },
    },
    coverAltDescp() {
      return this.blogCover.map((el) => el.altDescp)
    },
    authorImg() {
      return this.authorDetail.map((el) => el.avatar)
    },
    author() {
      return this.authorDetail.map((el) => el.name)
    },
  },
  methods: {
    formateDate(date) {
      return moment(date).format('LL')
    },
  },
}
</script>
<style lang="scss" scoped>
$midnight: #2c3e50;
$wisteria: #8e44ad;

.card-blog {
  position: relative;

  @media (min-width: 767px) {
    .card-blog {
      margin-bottom: 3rem;
    }
  }

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

  .custom-control {
    position: absolute;
    top: 0;
    right: 0;
  }

  .boxes {
    margin: auto;
    padding: 1rem;
    background: rgba(180, 177, 177, 0.5);
    border-radius: 50%;
    border: 1px solid rgba(180, 177, 177, 0.5);
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 5px;
    right: 5px;

    /*Checkboxes styles*/
    input[type='checkbox'] {
      display: none;

      & + .label {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 20px;
        font: 14px/20px 'Open Sans', Arial, sans-serif;
        color: rgb(75, 73, 73);
        cursor: pointer;

        &:last-child {
          margin-bottom: 0;
        }

        &:before {
          content: '';
          display: block;
          width: 20px;
          height: 20px;
          border: 3px solid #0078ff;
          position: absolute;
          left: -10px;
          top: -10px;
          opacity: 0.6;
          -webkit-transition: all 0.12s, border-color 0.08s;
          transition: all 0.12s, border-color 0.08s;
        }
      }

      &:checked + .label:before {
        width: 10px;
        top: -10px;
        left: -5px;
        border-radius: 0;
        opacity: 1;
        border-top-color: transparent;
        border-left-color: transparent;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
}
</style>
