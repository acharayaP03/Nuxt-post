

import { INITIAL_STATE } from "~/store/index";

export const  fetchPostApiSimulation  = () =>{
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve(INITIAL_STATE.posts)
    }, 500)
  })
}

export const state = () => {
  return{
    posts: []
  }
}

export const actions = {
  async fetchPosts({ commit }) {
    const posts = await fetchPostApiSimulation()
    commit('set_posts', INITIAL_STATE.posts)
    return posts;
  }
}


export const mutations = {
  set_posts(state, posts){
    state.posts = posts
  }
}
