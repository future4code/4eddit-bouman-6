import axios from 'axios';

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"

// COLOCA UM NOVO POST NO FEED

export const setPosts = (allPosts) => ({
    type: "SET_POSTS",
    payload: {
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

    try {
        const response = await axios.get(`${baseURL}/posts`, axiosHeader)
        dispatch(setPosts(response.data.posts));

    } catch (error) {
        window.alert("erro")
    }
}

// CRIA UM NOVO POSTS NA PÁGINA DE FEEDS

export const createPost = (text, title) => async (dispatch) => {
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

    try {
        const response = await axios.post(`${baseURL}/posts`, postInformation, axiosHeader)
        dispatch(getPosts())
    } catch (erros) {
        window.alert("Erro ao criar post")
    }
}

//PEGAR O POST CLICADO E ENVIAR PARA PÁGINA DE DETALHES

export const getPostDetailAction = (post) => ({
    type: "SET_POST_DETAIL",
    payload: {
        post,
    }
})

export const getPostDetail = (postId) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            auth: token,
        }
    }

    try {
        const response = await axios.get(`${baseURL}/posts/${postId}`, axiosHeader)
        dispatch(getPostDetailAction(response.data.post))

    } catch (error) {
        window.alert("Falha ao carregar detalhes da postagem!")
    }
}

// ADICIONA LIKE OU DISLIKE EM UM POST

export const postVote = (direction, postId) => async (dispatch) => {
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
            `${baseURL}/posts/${postId}/vote`,
            informationVote,
            axiosHeader,
        )
        dispatch(getPosts())

    } catch (error) {
        window.alert("erro no voto")
    }
}

//

export const setPostIdSelected = (postIdSelected) => ({
    type: 'SET_POST_ID',
    payload: {
        postIdSelected,
    }
})

// CRIAR E ADICIONAR COMENTÁRIOS NO POST SELECIONADO

export const createComment = (postId, text) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const axiosHeader = {
        headers: {
            auth: token,
        }        
    }

    const textInfo = {
        text,
    }

    try {
        const response = await axios.post(`${baseURL}/posts/${postId}/comment`, textInfo, axiosHeader)
        dispatch(getPostDetail(postId))
    } catch(error) {
        window.alert("Erro ao tentar criar um comentário.")
    }
}