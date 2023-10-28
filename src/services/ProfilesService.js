
import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { Profile } from "../models/Profile"
import { logger } from "../utils/Logger"

import { api } from "./AxiosService"

class ProfilesService {

    async getActiveProfile(profileId) {
        AppState.Profile = null
        const res = await api.get(`api/profiles/${profileId}`)
        // logger.log('got post by its id', res.data)
        AppState.profile = new Profile(res.data)
    }

    async getPostsById(profileId) {

        const res = await api.get(`api/posts?creatorId=${profileId}`)
        AppState.posts = res.data.posts.map((pojo) => new Post(pojo))
        AppState.older = res.data.older
        logger.log('getting all posts by creator id in the service', res.data)


    }


}

export const profilesService = new ProfilesService()