import axios from 'axios';

export const setPosts = (allPosts) =>({
    type: "SET_POSTS",
    payload:{
        allPosts,
    }
})

export const getPosts = () => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            auth: token
        }
    };

    try{
        const response =  await axios.get("https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts",axiosHeader)
        dispatch(setPosts(response.data.posts));
       
    }catch(error){
        window.alert("erro")
    }
}

export const createPost = (text,title) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const axiosHeader = {
        headers: {
            auth: token
        }
    };

    const postInformation = {
        text,
        title,
    }

    try{
        const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts", 
            postInformation,
            axiosHeader,
            )
        dispatch(getPosts())
    }catch(erros){
        window.alert("Erro ao criar post")
    }
}

export const postVote = (direction,postId) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const axiosHeader = {
        headers: {
            auth: token
        }
    };

    const informationVote = {
        direction,
    }

    try {
        const response = await axios.put(
            `https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/vote`,
            informationVote,
            axiosHeader,
            )
            dispatch(getPosts())

    }catch(error){
        window.alert("erro no voto")
    }
}