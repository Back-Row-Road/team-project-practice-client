const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('In onCreatePost in post events and the data is ', data)
  api.createPost(data)
    .then(ui.createPostSuccess)
    .catch(ui.postError)
}

const onUpdatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('In onUpdatePost in post events and the data is ', data)
  api.updatePost(data)
    .then(ui.updatePostSuccess)
    .catch(ui.createPostSuccess)
}
const addHandler = () => {
  $('#create-post-button').on('click', () =>
    $('#create-post-modal').css('display', 'block'))
  $('#create-post').on('submit', onCreatePost)

  $('#update-post-button').on('click', () =>
    $('#update-post-modal').css('display', 'block'))
  $('#update-post').on('submit', onUpdatePost)
}

module.exports = {
  addHandler
}
