

const  fetchPostApiSimulation  = (post) =>{
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve(post)
    }, 500)
  })
}

const INITIAL_STATE = {
  posts: [
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



export const state = () => {
    return{
       posts: []
    }
}

export const actions = {
    async fetchPosts({ commit }) {
      const posts = await fetchPostApiSimulation(INITIAL_STATE.posts)
      commit('set_posts', INITIAL_STATE.state)
      return posts;
  }
}


export const mutations = {
  set_posts(state, posts){
    state.posts = posts
  }
}
