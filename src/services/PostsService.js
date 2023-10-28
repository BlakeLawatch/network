import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService {

    async getPosts() {
        const res = await api.get('api/posts')
        logger.log('got posts', res.data)
        AppState.posts = res.data.posts.map((post) => new Post(post))
        logger.log('got posts in the service', AppState.posts)
        AppState.newer = res.data.newer
        AppState.older = res.data.older
    }

    async changePage(url) {
        const res = await api.get(url)
        logger.log('changing pages!', res.data)

        AppState.newer = res.data.newer
        AppState.older = res.data.older
        // const newPost = new Post(res.data)
        // AppState.activePost = newPost
        AppState.posts = res.data.posts.map(post => new Post(post))
    }

    async createComment(commentData) {
        const res = await api.post(`api/posts`, commentData)
        const newPost = new Post(res.data)
        AppState.posts.push(newPost)
    }

    async destroyComment(postId) {
        const res = await api.delete(`api/posts/${postId}`)
        logger.log('Comment got destroyed!', res.data)
        this.clearData()
    }

    clearData() {
        AppState.activePost = null
    }
}

export const postsService = new PostsService()