
const createPostSuccess = function (data) {
    console.log('In ui.createPostSuccess and data from server is ', data)
}

const updatePostSuccess = function (data) {
    console.log('In ui.updatePostSuccess and the data is ', data)

} 
// const signInSuccess = function(data) {
//     console.log("sign in success ran");
//     document.getElementById("sign-in").reset();
//     // message is on modal
//     $(".message").text("Signed in successfully");
//     // changes sign in/out buttons to display depending whether user is signed in
//     $("#sign-up-button, #sign-in-button").css("display", "none");
//     $("#sign-out-button, #change-password-button").css("display", "inline");
//     // stores the user data.
//     // used later to authenticate user w token
//     store.user = data.user;
//     console.log(store);
  
//     setTimeout(closeModal, 1000);
//   };

const postError = function (error) {
    console.error('in post ui and error is ', error)
}

module.exports = {
    createPostSuccess,
    updatePostSuccess,
    postError
}