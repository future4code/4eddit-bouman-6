const initialState = {
    allPosts: [],
    postDetails: undefined,
}

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_POSTS":
            const postList = action.payload.allPosts;
            return { ...state, allPosts: postList }
        
        case "GET_POST_DETAIL":     
            return { ... state, postDetails: action.payload.postId }

         default:
            return state;
    }
}

export default postsReducer;