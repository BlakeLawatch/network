export class Profile {
    constructor(data) {
        this.id = data.id || data._id
        this.name = data.name
        this.picture = data.picture
        this.bio = data.bio
        this.coverImg = data.coverImg
        this.github = data.github
        this.linkedin = data.linkedin
        this.resume = data.resume
        this.class = data.class
        this.graduated = data.graduated || false
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(this.updatedAt)
        this.likes = data.likes
    }
}


//     "_id": "647e0ce8237377c70cc8a493",
//     "subs": [
//       "auth0|647e0ce7f40a9a5d40c1cd66"
//     ],
//     "email": "jeanne@quentinsproject.com",
//     "name": "James Dean",
//     "picture": "https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
//     "bio": "I am awesome, so are flowers",
//     "coverImg": "https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
//     "github": "https://github.com/tebazele/",
//     "linkedin": "https://www.linkedin.com/in/jeanne-fischer-allen/",
//     "resume": "",
//     "class": "Late Fall 2022",
//     "graduated": true,
//     "createdAt": "2023-06-05T16:27:34.712Z",
//     "updatedAt": "2023-06-06T00:49:35.508Z",
//     "__v": 0,
//     "id": "647e0ce8237377c70cc8a493"
//   },
//   "likes": [
//     {
//       "_id": "6467e0efc6a6f0d063f4e837",
//       "name": "Jibbles",
//       "picture": "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//       "id": "6467e0efc6a6f0d063f4e837"
//     }
//   ],