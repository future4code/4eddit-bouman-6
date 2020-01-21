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