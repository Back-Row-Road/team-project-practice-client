const getFormFields = require('../../../lib/get-form-fields.js')

const onCreatePost = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    console.log('In onCreatePost in post events')
    // do api
}

<<<<<<< HEAD

=======
// TODO handlers are not connected b/c do not yet have forms
>>>>>>> WIP Added routes for post
const addHandler = () => {
    // $('#create-post-button').on('click', onCreatePost)
}

module.exports = {
    addHandler
}