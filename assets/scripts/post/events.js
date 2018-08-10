const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')

const onCreatePost = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    console.log('In onCreatePost in post events and the data is ', data)
    api.createPost(data)
}

const addHandler = () => {
    $('#create-post-button').on('click', () =>
    $("#create-post-modal").css("display", "block"))

    $("#create-post").on("submit", onCreatePost)
}

module.exports = {
    addHandler
}