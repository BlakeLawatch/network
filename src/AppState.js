import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},

  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Post.js').Post []} */
  posts: [],

  /** @type {import('./models/Post.js').Post | null} */
  activePost: null,
  // totalPages: 0,
  newer: null,
  older: null,

  /** @type {import('./models/Profile.js').Profile | null} */
  profile: null,

  /** @type {import('./models/Promo.js').Promo []} */
  promos: [],

  /** @type {import('./models/Like.js').like []} */
  likes: []
})
