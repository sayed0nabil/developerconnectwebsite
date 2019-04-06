import axios from 'axios';


// GET All Posts
export const getPosts = () => dispatch => {
    axios.get('http://localhost:4000/api/posts/')
    .then( result => {
        dispatch({
            type: 'GET-ERRORS',
            payload: {}
        })
        dispatch({
            type: 'GET_POSTS',
            payload: result.data
        })
    })
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}
export const addPost = (post, history) => dispatch => {
    console.log('Post', post);
    axios.post('http://localhost:4000/api/posts/createpost', post)
    .then( result => {
        dispatch({
            type: 'GET-ERRORS',
            payload: {}
        });
        history.push('/posts');
    })
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}
export const getPost = postId => dispatch => {
    axios.get(`http://localhost:4000/api/posts/${postId}`)
    .then(post => {
        dispatch({
            type: 'GET_POST',
            payload: post
        })
        dispatch({
            type: 'GET-ERRORS',
            payload: {}
        })
    })
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}
export const deletePost = postId => dispatch => {
    axios.delete(`http://localhost:4000/api/posts/${postId}`)
    .then( post => {
        dispatch({
            type: 'GET-ERRORS',
            payload: {}
        })
        dispatch(getPosts());
    })
    .catch( err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}
export const likePost = postId => dispatch => {
    axios.post(`http://localhost:4000/api/posts/like/${postId}`)
    .then(result => {
        dispatch({
            type:'GET_POST',
            payload: result.data
        })
    })
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}
export const unlikePost = postId => dispatch => {
    axios.post(`http://localhost:4000/api/posts/unlike/${postId}`)
    .then(result => {
        dispatch({
            type:'GET_POST',
            payload: result.data
        })
    })
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}
export const addComment = (postId, comment) => dispatch => {
    axios.post(`http://localhost:4000/api/posts/comment/${postId}`, comment)
    .then(result => {
        dispatch({
            type:'GET_POST',
            payload: result.data
        })
    })
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}
export const deleteComment = (postId, commentId) => dispatch => {
    axios.delete(`http://localhost:4000/api/posts/comment/${postId}/${commentId}`)
    .then(result => {
        dispatch({
            type:'GET_POST',
            payload: result.data
        })
    })
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}