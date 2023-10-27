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
        AppState.older = res.data.previous
        AppState.posts = res.data.posts.map(post => new Post(post))




    }


}

export const postsService = new PostsService()