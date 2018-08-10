const config = require('./../config.js')
const store = require('./../store.js')

const getPosts = function {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/posts',
    })
}

const createPost = function (data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/posts',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        data
    })
}

const updatePost = function (data) {
    return $.ajax({
        method: 'PATCH', 
        url: config.apiUrl + '/posts/' + data.post.id, // TODO figure out what data & get id
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        data
    })
}

const deletePost = function (data) {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/posts/' + data.post.id, // TODO figure out what data & get id
        headers: {
            Authorization: 'Token token=' + store.user.token
        }
    })
}



module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}