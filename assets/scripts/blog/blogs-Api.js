const apiUrl = require("../config.js");
const blogContainer = require("./blogs-container.js");
const blogStack = require("./blogs-stack.js");
const createBlogRequest = require("./create-blogRequest.js");
let blogs = () => {
  $.ajax({
    url: apiUrl.apiUrl + "/blogs",
    method: "GET"
  })
    .then(data => {
      blogContainer.blogs = data;
      blogStack();
      console.log(blogContainer);
      createBlogRequest();
    })
    .catch(() => {
      console.log("error");
    });
};

module.exports = blogs;
