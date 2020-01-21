const initialState = {
    allPosts: [],
}

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_POSTS":
            const postList = action.payload.allPosts;
            return { ...state, allPosts: postList }

         default:
            return state;
    }
}

export default postsReducer